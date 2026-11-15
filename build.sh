#!/bin/sh
# Gera os arquivos .min (o index.html usa estes). Edite sempre os arquivos sem .min e rode de novo.
# robot3d.min.js e robot3d.min.css já vêm prontos (motor 3D incluso): não gerar aqui.
cd "$(dirname "$0")/.."
for f in app extras loja quizbot; do esbuild $f.js --minify-whitespace --minify-syntax --charset=utf8 --outfile=$f.min.js; done
for f in style loja; do esbuild $f.css --minify --charset=utf8 --outfile=$f.min.css; done
