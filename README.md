# Maratona Marvel

Checklist da maratona Marvel rumo a *Vingadores: Doutor Destino* (17/12/2026). Site estático, sem servidor, funciona offline (PWA).

## Arquivos (todos na raiz, para subir fácil pelo celular)

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página única: telas, abas, modais |
| `app.min.js` | Lógica do app (lista, quiz, conquistas, trilha, tela de início) |
| `loja.js` / `loja.min.js` | Lojinha do robô: moedas, acessórios, looks, caixa surpresa, imagem para compartilhar |
| `robot3d.js` / `robot3d.min.js` | Robô em 3D (fatias, giro ao arrastar) |
| `robo-extra.js` / `.css` (+ `.min`) | Robô 8.0: animações novas (giro, mortal, pulo, dança, olhar, reverência, curioso, energia) e falas. **Falas: edite a lista `FALAS`** |
| `quizbot.min.js`, `extras.min.js` | Robô no quiz; extras (compartilhar, lembrete, instalar app) |
| `style.css`, `loja.css`, `robot3d.css` (+ `.min.css`) | Estilos |
| `elenco.js` | Elenco de Doomsday: **edite só a lista no topo** |
| `data.js` | Sons embutidos |
| `sw.js` | Service worker (offline, trilha e fontes em cache) |
| `ost-1..6.m4a`, ícones, `og-image.png` | Mídia |

Regra: edite o arquivo **sem** `.min`; o `.min` é gerado.

## Fluxo de trabalho

```
npm install        # uma vez
npm run build      # gera os .min e carimba uma versão única em index.html e sw.js
npm test           # abre o site num celular simulado e usa a lojinha
```

`npm run build` só recompila arquivos cujo fonte existe. `app.js`, `extras.js` e `quizbot.js` hoje não estão no projeto (só os `.min`); se você tiver esses fontes, coloque-os na raiz.
