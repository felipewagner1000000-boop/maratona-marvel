#!/bin/sh
# Gera os arquivos .min (o index.html usa estes). Edite sempre os arquivos sem .min e rode de novo.
# Precisa de: npm i -g esbuild   (ou npx esbuild)
cd "$(dirname "$0")/.."
for f in app extras robot3d loja quizbot; do esbuild $f.js --minify-whitespace --minify-syntax --charset=utf8 --outfile=$f.min.js; done
for f in style robot3d loja; do esbuild $f.css --minify --charset=utf8 --outfile=$f.min.css; done
