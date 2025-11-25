# Deploy Direto na Hostinger (Sem WordPress)

## 🎯 Objetivo

Deploy automático do site React diretamente na pasta `public_html` da Hostinger, sem usar WordPress.

## 📋 Pré-requisitos

Você precisa configurar os seguintes secrets no GitHub:

1. Acesse: `Settings` → `Secrets and variables` → `Actions`
2. Adicione os seguintes secrets:

### Secrets Necessários

- **FTP_SERVER**: Endereço do servidor FTP da Hostinger
  - Exemplo: `ftp.bioactivehair.com` ou IP do servidor
  
- **FTP_USERNAME**: Usuário FTP da Hostinger
  - Geralmente é o mesmo usuário do painel de controle
  
- **FTP_PASSWORD**: Senha FTP da Hostinger

## 🚀 Como Funciona

1. **Trigger**: O deploy é acionado automaticamente quando você faz push para a branch `main`
2. **Build**: O GitHub Actions executa `npm run build` e gera os arquivos na pasta `dist/`
3. **Deploy**: Os arquivos são enviados via FTP para `/domains/bioactivehair.com/public_html/`
4. **Resultado**: Site disponível em `https://bioactivehair.com`

## 📁 Estrutura de Deploy

```
Hostinger
└── domains/
    └── bioactivehair.com/
        └── public_html/          ← Arquivos do site aqui
            ├── index.html
            ├── assets/
            │   ├── main.css
            │   ├── main.js
            │   └── imagens...
            └── .vite/
```

## ⚙️ Configuração na Hostinger

### Passo 1: Remover WordPress (se instalado)

1. Acesse o painel da Hostinger
2. Vá em `Websites` → `bioactivehair.com`
3. Faça backup se necessário
4. Delete todos os arquivos da pasta `public_html`

### Passo 2: Obter Credenciais FTP

1. No painel da Hostinger, vá em `Arquivos` → `Gerenciador de Arquivos`
2. Ou vá em `Avançado` → `Contas FTP`
3. Anote:
   - Servidor FTP
   - Usuário
   - Senha (ou crie uma nova)

### Passo 3: Configurar Secrets no GitHub

1. Vá para o repositório no GitHub
2. `Settings` → `Secrets and variables` → `Actions`
3. Clique em `New repository secret`
4. Adicione cada secret (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)

## 🔄 Deploy Manual

Se precisar fazer deploy manualmente:

1. Vá para `Actions` no GitHub
2. Selecione `Deploy Direto para Hostinger`
3. Clique em `Run workflow`
4. Selecione a branch `main`
5. Clique em `Run workflow`

## ✅ Vantagens vs WordPress

- ✅ **Sem conflitos de CSS**: Nenhum tema WordPress para sobrescrever estilos
- ✅ **Performance**: Site estático é muito mais rápido
- ✅ **Simplicidade**: Sem plugins, sem banco de dados
- ✅ **Controle total**: Você tem 100% de controle sobre o código
- ✅ **Segurança**: Menos vulnerabilidades (sem WordPress)
- ✅ **Deploy automático**: Push no GitHub = site atualizado

## 🐛 Troubleshooting

### Deploy falhou?

1. Verifique se os secrets estão corretos
2. Verifique se o caminho do servidor está correto: `/domains/bioactivehair.com/public_html/`
3. Verifique os logs em `Actions` no GitHub

### Site não carrega?

1. Verifique se o arquivo `index.html` está na raiz do `public_html`
2. Verifique se as permissões dos arquivos estão corretas (644 para arquivos, 755 para pastas)
3. Limpe o cache do navegador

### Imagens não aparecem?

1. Verifique se a pasta `assets` foi enviada corretamente
2. Verifique os caminhos das imagens no código

## 📞 Suporte

Se tiver problemas, verifique:
- Logs do GitHub Actions
- Painel da Hostinger
- Console do navegador (F12)
