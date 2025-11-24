# Como Importar o Template JSON no Elementor

Este arquivo JSON (`elementor-template.json`) pode ser importado diretamente no Elementor.

## 📥 Passo a Passo para Importação

### 1. Acesse o WordPress Admin
- Entre no painel administrativo do seu WordPress

### 2. Vá para Templates do Elementor
- No menu lateral, vá em **Templates > Saved Templates**
- Ou acesse diretamente: `seu-site.com/wp-admin/edit.php?post_type=elementor_library`

### 3. Importe o Arquivo JSON
- Clique no botão **"Importar Templates"** (Import Templates)
- Clique em **"Choose File"** (Escolher Arquivo)
- Selecione o arquivo `elementor-template.json`
- Clique em **"Import Now"** (Importar Agora)

### 4. Use o Template na Sua Página
- Crie uma nova página ou edite uma existente
- Clique em **"Editar com Elementor"**
- Clique no ícone de pasta (Templates) na parte inferior esquerda
- Vá para a aba **"My Templates"** (Meus Templates)
- Encontre **"Bio Active Hair Landing Page"**
- Clique em **"Insert"** (Inserir)

## ⚙️ Após Importar

### 1. Substitua as Imagens
Você precisa substituir os URLs das imagens pelos URLs reais do WordPress:

1. Faça upload das imagens para **Mídia > Adicionar nova**
2. No Elementor, clique em cada imagem
3. No painel esquerdo, clique em "Escolher Imagem"
4. Selecione a imagem correta da biblioteca de mídia

**Imagens necessárias:**
- `hero-product-composite.jpg`
- `product-bottle.jpg`
- `before-after.jpg`
- `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`
- `ingredients-biotin.jpg`, `ingredients-collagen.jpg`, etc.

### 2. Configure Links dos Botões
Todos os botões "Comprar Agora" precisam ser atualizados com o link real do seu checkout:

1. Clique no botão no editor Elementor
2. No painel esquerdo, encontre o campo **"Link"**
3. Substitua `#precos` pelo URL do seu checkout
4. Exemplo: `https://seusite.com/checkout?produto=5-frascos`

### 3. Personalize Cores e Textos
- Clique em qualquer elemento para editar
- No painel esquerdo, você verá todas as opções de personalização
- Altere cores, tamanhos de fonte, espaçamentos, etc.

## 🎨 Cores do Template

O template usa a paleta de cores do Bio Active Hair:

- **Primary (Rosa)**: `#CC007F`
- **Primary Dark**: `#A30065`
- **Text**: `#333333`
- **Text Muted**: `#666666`
- **Background**: `#ffffff`
- **Background Accent**: `#f8f8f8`

Para alterar cores globalmente:
1. No Elementor, vá em **Site Settings > Global Colors**
2. Defina cores personalizadas
3. Aplique em todos os elementos

## 🔧 Widgets Usados

Este template utiliza os seguintes widgets nativos do Elementor:

- **Heading** - Títulos
- **Text Editor** - Parágrafos e textos
- **Button** - Botões de CTA
- **Image** - Imagens
- **Icon List** - Listas com ícones
- **Accordion** - FAQ (perguntas frequentes)
- **Testimonial** - Depoimentos (requer Elementor Pro)
- **Section** - Containers de seções

⚠️ **Nota**: O widget **Testimonial** requer **Elementor Pro**. Se você não tiver o Pro, pode usar um widget de **Card** ou **Image Box** para criar depoimentos manualmente.

## 📱 Responsividade

O template é 100% responsivo. Para ajustar a visualização mobile:

1. No Elementor, clique nos ícones de dispositivo no rodapé (Desktop/Tablet/Mobile)
2. Ajuste espaçamentos, tamanhos de fonte e visibilidade para cada dispositivo
3. Use as configurações **"Responsive"** de cada widget

## ✅ Checklist Final

- [ ] Template importado com sucesso
- [ ] Todas as imagens substituídas
- [ ] Links dos botões configurados
- [ ] Cores personalizadas aplicadas
- [ ] Textos revisados
- [ ] Testado em mobile/tablet
- [ ] FAQ configurado
- [ ] Página publicada

## 🆘 Problemas Comuns

**"Arquivo não pôde ser importado"**
- Verifique se o Elementor está atualizado (versão 3.0+)
- Tente importar via **Templates > Import Templates** ao invés de Library

**"Widgets não aparecem"**
- Alguns widgets como Testimonial requerem Elementor Pro
- Substitua por widgets gratuitos equivalentes

**"Estilos não estão corretos"**
- Limpe o cache do site (use um plugin de cache como WP Rocket)
- Vá em **Elementor > Tools > Regenerate CSS**

---

**Pronto!** Agora você tem uma landing page totalmente editável no Elementor 🎉
