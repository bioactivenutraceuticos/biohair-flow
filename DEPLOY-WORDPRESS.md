# Deploy Automático para WordPress com GitHub Actions

## 📋 Pré-requisitos

1. Repositório Git configurado no GitHub
2. WordPress instalado com Elementor na Hostinger
3. Acesso FTP ao servidor WordPress

## 🔧 Configuração

### 1. Obter Credenciais FTP da Hostinger

1. Acesse o painel **hPanel** da Hostinger
2. Vá em **Arquivos → Gerenciador de Arquivos** ou **Contas FTP**
3. Anote as credenciais:
   - **Servidor FTP**: geralmente `ftp.seudominio.com` ou IP do servidor
   - **Usuário**: seu usuário FTP (ex: `u123456789`)
   - **Senha**: sua senha FTP
   - **Porta**: 21 (FTPS)

### 2. Configurar Secrets no GitHub

Acesse seu repositório no GitHub e vá em:
**Settings → Secrets and variables → Actions → New repository secret**

Adicione os seguintes secrets:

- `FTP_SERVER`: Endereço do servidor FTP da Hostinger (ex: `ftp.seudominio.com`)
- `FTP_USERNAME`: Usuário FTP da Hostinger (ex: `u123456789`)
- `FTP_PASSWORD`: Senha FTP da Hostinger

### 3. Verificar Caminho do WordPress na Hostinger

O caminho padrão na Hostinger é `/public_html/`. Se seu WordPress está em:

- **Raiz do domínio**: `/public_html/wp-content/plugins/bioactive-hair-plugin/` ✅ (já configurado)
- **Subpasta**: `/public_html/blog/wp-content/plugins/bioactive-hair-plugin/` (ajuste no workflow)

### 4. Ajustar o Workflow (se necessário)

Edite `.github/workflows/deploy-wordpress.yml` se precisar:

- Mudar a branch de deploy (padrão: `main`)
- Ajustar o caminho do servidor (`server-dir`) se WordPress não estiver na raiz

### 5. Como Funciona

Quando você fizer push para a branch `main`:

1. ✅ GitHub Actions instala as dependências
2. ✅ Faz build do projeto React/Vite
3. ✅ Cria a estrutura do plugin WordPress
4. ✅ Faz upload via FTP para `/wp-content/plugins/bioactive-hair-plugin/`

### 6. Ativar o Plugin no WordPress

Após o primeiro deploy:

1. Acesse o painel do WordPress
2. Vá em **Plugins → Plugins instalados**
3. Ative o plugin **BioActive Hair Plugin**

### 7. Usar no Elementor

Para exibir sua aplicação React em qualquer página:

1. Edite uma página no Elementor
2. Adicione um widget **Shortcode**
3. Insira: `[bioactive_hair_app]`
4. Publique a página

## 🚀 Deploy Manual

Para fazer deploy manualmente sem esperar um push:

1. Vá em **Actions** no GitHub
2. Selecione **Deploy to WordPress**
3. Clique em **Run workflow**

## 🔄 Alternativa: Deploy via SSH (Hostinger Business/Premium)

Se você tem plano Business ou superior com acesso SSH:

1. Ative o SSH no hPanel: **Avançado → SSH Access**
2. Substitua o step de deploy no workflow por:

```yaml
- name: Deploy via SSH
  uses: easingthemes/ssh-deploy@v5.0.3
  with:
    SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
    REMOTE_HOST: ${{ secrets.SSH_HOST }}
    REMOTE_USER: ${{ secrets.SSH_USER }}
    SOURCE: "wordpress-plugin/"
    TARGET: "/home/u123456789/public_html/wp-content/plugins/bioactive-hair-plugin/"
```

E adicione os secrets:
- `SSH_PRIVATE_KEY`: Chave privada SSH (gere no hPanel)
- `SSH_HOST`: Endereço do servidor SSH
- `SSH_USER`: Usuário SSH (mesmo do FTP)

## 🐛 Troubleshooting

### Plugin não aparece no WordPress
- Verifique se o caminho `server-dir` está correto
- Confirme que o FTP tem permissões de escrita

### Assets não carregam
- Verifique se os arquivos CSS/JS estão na pasta `assets/`
- Limpe o cache do WordPress e do navegador

### Erro de permissões
- Ajuste as permissões da pasta do plugin: `chmod 755 -R bioactive-hair-plugin/`

## 📝 Estrutura do Plugin

```
wp-content/plugins/bioactive-hair-plugin/
├── bioactive-hair-plugin.php  (arquivo principal)
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── setup-wp-plugin.php
```

## 🎯 Próximos Passos

1. Configure os secrets no GitHub com as credenciais da Hostinger
2. Faça um commit e push para testar o deploy
3. Verifique os logs em **Actions** no GitHub
4. Ative o plugin no WordPress
5. Adicione o shortcode `[bioactive_hair_app]` no Elementor

## 🏢 Dicas Específicas da Hostinger

### Encontrar Credenciais FTP
1. Acesse o **hPanel** da Hostinger
2. Vá em **Arquivos → Contas FTP**
3. Use a conta FTP principal ou crie uma nova

### Caminho Correto
- A Hostinger usa `/public_html/` como raiz do site
- Se você instalou WordPress em subpasta, ajuste o caminho no workflow

### Firewall e Segurança
- A Hostinger pode bloquear IPs desconhecidos
- Se o deploy falhar, verifique em **Segurança → Gerenciador de IP** no hPanel
- Os IPs do GitHub Actions mudam, então use FTPS (já configurado)

### Performance
- Após o deploy, limpe o cache em **Website → Cache Manager**
- Considere usar o LiteSpeed Cache se disponível

### Suporte
- Se tiver problemas, o suporte da Hostinger é 24/7 via chat
