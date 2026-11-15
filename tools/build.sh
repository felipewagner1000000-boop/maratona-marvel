#!/usr/bin/env bash
# Gera os arquivos .min a partir dos fontes e carimba uma versão única em index.html e sw.js.
# Uso: npm install && npm run build
# robot3d.min.js e robot3d.min.css já vêm prontos (motor 3D incluso): NÃO gerar aqui.
set -euo pipefail
cd "$(dirname "$0")/.."
V=$(date +%Y%m%d%H%M)

for n in loja robo-extra elenco; do
  [ -f "$n.js" ] && npx terser "$n.js" -c -m -o "$n.min.js" && echo "js  $n.min.js"
done
# app.js / extras.js / quizbot.js só entram se existirem e não forem a cópia velha da loja
for n in app extras quizbot; do
  if [ -f "$n.js" ] && ! grep -q "maratona-moedas" "$n.js"; then npx terser "$n.js" -c -m -o "$n.min.js" && echo "js  $n.min.js"; fi
done
for n in style loja robo-extra; do
  [ -f "$n.css" ] && npx cleancss -O2 -o "$n.min.css" "$n.css" && echo "css $n.min.css"
done

sed -i -E "s/\?v=[0-9a-z]+/?v=$V/g" index.html
sed -i -E "s/maratona-v[0-9]+/maratona-v$V/" sw.js
echo "versão $V carimbada em index.html e sw.js"
