# Deploy para WordPress

## Método 1: Script Automático (Recomendado)

1. Execute o script de deploy:
```bash
chmod +x deploy-wp.sh
./deploy-wp.sh
```

2. O script irá:
   - Fazer o build do projeto
   - Preparar os arquivos na pasta `wp-plugin-temp/`

3. Compacte a pasta `wp-plugin-temp/bioactive-hair-plugin` em um arquivo ZIP

4. No WordPress:
   - Vá em **Plugins > Adicionar novo > Enviar plugin**
   - Faça upload do arquivo ZIP
   - Ative o plugin

## Método 2: Manual

1. Faça o build do projeto:
```bash
npm run build
```

2. Copie os arquivos:
   - Copie todo o conteúdo da pasta `dist/` para `wp-content/plugins/bioactive-hair-plugin/`
   - Copie o arquivo `bioactive-hair-plugin.php` para `wp-content/plugins/bioactive-hair-plugin/`

3. No WordPress:
   - Vá em **Plugins**
   - Ative o plugin "BioActive Hair Plugin"

## Usando o Plugin

Adicione o shortcode em qualquer página ou post:

```
[bioactive_hair_app]
```

## Troubleshooting

### Arquivos CSS/JS não carregam (404)

1. Verifique se os arquivos estão em `wp-content/plugins/bioactive-hair-plugin/assets/`
2. Limpe o cache do WordPress
3. Desative e reative o plugin

### Imagens não aparecem

As imagens devem estar em `wp-content/plugins/bioactive-hair-plugin/assets/`

### Estilos não aplicam

Verifique se o tema do WordPress não está sobrescrevendo os estilos. Pode ser necessário adicionar `!important` em alguns estilos.
