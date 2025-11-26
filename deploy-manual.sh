#!/bin/bash

# Script de deploy manual via FTP
# Execute: bash deploy-manual.sh

echo "🚀 Iniciando deploy manual..."

# Fazer build
echo "📦 Fazendo build do projeto..."
npm run build

echo ""
echo "✅ Build concluído!"
echo ""
echo "📁 Arquivos prontos para upload em: ./dist/"
echo ""
echo "Para fazer upload manual:"
echo "1. Acesse o Gerenciador de Arquivos da Hostinger"
echo "2. Navegue até /public_html/"
echo "3. Faça upload de TODOS os arquivos da pasta dist/"
echo ""
echo "Ou use um cliente FTP como FileZilla:"
echo "- Host: [seu servidor FTP]"
echo "- Usuário: [seu usuário FTP]"
echo "- Senha: [sua senha FTP]"
echo "- Pasta remota: /public_html/"
echo "- Pasta local: ./dist/"
echo ""
echo "Arquivos a fazer upload:"
ls -lh dist/
