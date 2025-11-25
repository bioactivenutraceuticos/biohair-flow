#!/bin/bash

# Script para fazer build e preparar arquivos para WordPress

echo "🔨 Fazendo build do projeto..."
npm run build

echo "📦 Preparando arquivos para WordPress..."

# Cria diretório temporário para o plugin
mkdir -p wp-plugin-temp/bioactive-hair-plugin
mkdir -p wp-plugin-temp/bioactive-hair-plugin/assets

# Copia arquivos do build
cp -r dist/* wp-plugin-temp/bioactive-hair-plugin/

# Copia o arquivo do plugin
cp bioactive-hair-plugin.php wp-plugin-temp/bioactive-hair-plugin/

echo "✅ Arquivos preparados em wp-plugin-temp/"
echo ""
echo "📋 Próximos passos:"
echo "1. Compacte a pasta wp-plugin-temp/bioactive-hair-plugin em um arquivo .zip"
echo "2. No WordPress, vá em Plugins > Adicionar novo > Enviar plugin"
echo "3. Faça upload do arquivo .zip"
echo "4. Ative o plugin"
echo ""
echo "Ou copie manualmente os arquivos para:"
echo "wp-content/plugins/bioactive-hair-plugin/"
