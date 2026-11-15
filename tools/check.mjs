// Verificação rápida e determinística do projeto (roda em ~1 s, sem navegador).
// Uso: npm run check
// Falha (código 1) se algo vai quebrar o app ou o modo offline sem você perceber.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const ler = (f) => readFileSync(join(raiz, f), "utf8");
const existe = (f) => existsSync(join(raiz, f));
const erros = [], avisos = [];
const limpa = (u) => u.split("?")[0].split("#")[0].replace(/^\.\//, "");
const local = (u) => u && !/^(https?:|data:|mailto:|#|\/\/)/.test(u);

const html = ler("index.html"), sw = ler("sw.js");

// 1) arquivos que o index.html usa (link/script/manifest/ícones)
const usados = new Set();
for (const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) if (local(m[1])) usados.add(limpa(m[1]));
// scripts que o próprio index.html carrega depois (data.js, qr.js)
const dyn = html.match(/\[((?:"[\w.-]+\.js",?)+)\]\.forEach/);
if (dyn) for (const m of dyn[1].matchAll(/"([\w.-]+\.js)"/g)) usados.add(m[1]);
usados.delete("");
usados.delete("#list");

// 2) lista de arquivos guardados pelo service worker
const lista = sw.match(/var F = \[([\s\S]*?)\];/);
if (!lista) erros.push("sw.js: não achei a lista `var F = [...]` de arquivos do cache");
const cache = new Set(lista ? [...lista[1].matchAll(/"([^"]+)"/g)].map((m) => limpa(m[1])) : []);
cache.delete("");

for (const f of usados) if (!existe(f)) erros.push(`index.html usa "${f}", mas o arquivo não existe`);
for (const f of cache) if (!existe(f)) erros.push(`sw.js guarda "${f}" no cache, mas o arquivo não existe (o erro seria silencioso e o offline falharia)`);
for (const f of usados) if (!cache.has(f) && !/^https?:/.test(f)) avisos.push(`"${f}" é usado no index.html mas não está no cache do sw.js (não abre offline)`);

// 3) ícones e cores do manifest
if (existe("manifest.webmanifest")) {
  try {
    const mf = JSON.parse(ler("manifest.webmanifest"));
    for (const i of mf.icons || []) if (!existe(limpa(i.src))) erros.push(`manifest: ícone "${i.src}" não existe`);
    if (!mf.start_url || !mf.name) erros.push("manifest: faltam name ou start_url");
  } catch (e) { erros.push("manifest.webmanifest não é um JSON válido: " + e.message); }
}

// 4) versão carimbada igual no index.html e no sw.js
const vs = new Set([...html.matchAll(/\?v=([0-9a-z]+)/g)].map((m) => m[1]));
const vsw = (sw.match(/maratona-v([0-9a-z]+)/) || [])[1];
if (vs.size > 1) erros.push("index.html tem mais de uma versão em ?v=: " + [...vs].join(", "));
if (vsw && vs.size === 1 && !vs.has(vsw)) erros.push(`versão diferente: index.html ?v=${[...vs][0]} e sw.js maratona-v${vsw} (rode npm run build)`);

// 5) sintaxe de todos os .js (pega vírgula faltando antes de publicar)
for (const f of readdirSync(raiz).filter((n) => n.endsWith(".js"))) {
  try { execFileSync(process.execPath, ["--check", join(raiz, f)], { stdio: "pipe" }); }
  catch (e) { erros.push(`erro de sintaxe em ${f}: ` + String(e.stderr || e.message).split("\n").find((l) => l.trim()) ); }
}

// 6) cada fonte tem o seu .min atualizado? (aviso, não erro)
for (const n of ["loja", "robot3d", "robo-extra"])
  if (existe(`${n}.js`) && !existe(`${n}.min.js`)) avisos.push(`${n}.js existe mas ${n}.min.js não (rode npm run build)`);

avisos.forEach((a) => console.log("aviso: " + a));
if (erros.length) { erros.forEach((e) => console.error("ERRO: " + e)); process.exit(1); }
console.log(`ok: ${usados.size} arquivos do index, ${cache.size} no cache offline, sintaxe e versão conferidas`);
