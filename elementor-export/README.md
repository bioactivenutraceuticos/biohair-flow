# Bio Active Hair - Guia de Integração WordPress + Elementor

Este pacote contém a versão exportável da landing page Bio Active Hair, otimizada para uso com WordPress e Elementor.

## 📁 Arquivos Incluídos

- `index.html` - Estrutura HTML completa da landing page
- `styles.css` - Estilos CSS compilados
- `script.js` - JavaScript para interatividade (FAQ accordion e scroll suave)
- `README.md` - Este arquivo com instruções

## 🚀 Como Usar no WordPress + Elementor

### Método 1: Widget HTML do Elementor (Recomendado)

1. **Adicionar CSS Global (vai no HEAD automaticamente)**
   - No WordPress, vá em **Elementor > Configurações Personalizadas > CSS Personalizado**
   - Cole todo o conteúdo do arquivo `styles.css`
   - Salve as alterações
   - ⚠️ O Elementor injeta automaticamente esse CSS no `<head>` da página

2. **Adicionar JavaScript Global (vai antes do </body>)**
   - Use um plugin como "Simple Custom CSS and JS" ou "Code Snippets"
   - Cole o conteúdo do arquivo `script.js` dentro de tags `<script></script>`
   - Configure para carregar no **Footer (antes do </body>)** - isso garante que o DOM esteja carregado
   - ✅ Ou adicione via **Elementor > Theme Builder > Footer** usando um widget HTML

3. **Adicionar Seções no Elementor**
   - Crie uma nova página no WordPress
   - Edite com Elementor
   - Para cada seção marcada com comentário `<!-- NOME DA SEÇÃO -->` no HTML:
     - Adicione um widget **HTML** do Elementor
     - Cole o código HTML daquela seção específica
     - Ajuste espaçamentos e configurações conforme necessário

4. **Atualizar Caminhos das Imagens**
   - Faça upload das imagens da pasta `src/assets/` para a biblioteca de mídia do WordPress
   - Substitua todos os caminhos `../src/assets/nome-da-imagem.jpg` pelos URLs corretos do WordPress
   - Exemplo: `../src/assets/hero-product-composite.jpg` → `https://seusite.com/wp-content/uploads/2024/01/hero-product-composite.jpg`

### Método 2: Template Completo

1. **Instale o Plugin "Code Snippets"** ou similar
2. Adicione o CSS e JS como snippets globais
3. Crie um template personalizado e cole todo o HTML
4. Atribua o template à sua página

## 📝 Estrutura das Seções

O HTML está dividido em blocos modulares que você pode copiar individualmente:

1. **Header** - Cabeçalho com navegação
2. **Hero Section** - Seção principal com título e CTA
3. **Problem Solution** - Problemas e soluções
4. **Product Showcase** - Destaque do produto
5. **Composition Section** - Ingredientes e composição
6. **Before After** - Resultados antes e depois
7. **Testimonials** - Depoimentos de clientes
8. **Pricing Section** - Planos e preços
9. **Guarantee Section** - Garantia de satisfação
10. **FAQ Section** - Perguntas frequentes
11. **Footer** - Rodapé

## 🎨 Personalizações no Elementor

### Cores Principais
As cores estão definidas em variáveis CSS no início do `styles.css`:

```css
--color-primary: #CC007F;        /* Rosa principal */
--color-primary-dark: #A30065;   /* Rosa escuro */
--color-secondary: #333333;       /* Cinza escuro */
```

Para alterar cores, modifique essas variáveis no CSS global.

### Botões de Compra

Todos os links `<a href="#precos">` e `<a href="#">` nos botões "Comprar Agora" devem ser substituídos pelo link real do seu checkout/carrinho.

Exemplo:
```html
<!-- ANTES -->
<a href="#" class="pricing-button">Comprar Agora</a>

<!-- DEPOIS -->
<a href="https://seusite.com/checkout?produto=1-frasco" class="pricing-button">Comprar Agora</a>
```

### Navegação do Header

Os links de navegação usam âncoras (#composicao, #resultados, etc.). Certifique-se de que as IDs correspondentes existem nas seções.

## 📱 Responsividade

O CSS inclui media queries para garantir que o layout funcione perfeitamente em:
- Desktop (> 968px)
- Tablet (768px - 968px)
- Mobile (< 768px)

## ⚙️ Funcionalidades JavaScript

O `script.js` inclui:

1. **FAQ Accordion**: Clique nas perguntas para expandir/recolher respostas
2. **Smooth Scroll**: Navegação suave ao clicar em links âncora (#)

## 🔧 Dicas de Otimização

1. **Imagens**: Otimize todas as imagens antes do upload (use plugins como Smush ou ShortPixel)
2. **Cache**: Use um plugin de cache como WP Rocket ou W3 Total Cache
3. **CDN**: Considere usar um CDN para servir imagens mais rapidamente
4. **Minificação**: Minifique o CSS e JS em produção

## 🎯 SEO

O HTML já está otimizado com:
- Tags semânticas (`<header>`, `<section>`, `<footer>`)
- Meta description no `<head>`
- Estrutura de headings (H1, H2, H3, H4) correta
- Atributos `alt` em todas as imagens

**Importante**: Adicione um plugin de SEO como Yoast ou Rank Math para gerenciar meta tags e schema markup.

## 🆘 Suporte

Se encontrar problemas:

1. Verifique se o CSS foi adicionado corretamente ao Elementor
2. Confirme que o JavaScript está carregando (inspecione o console do navegador)
3. Valide que os caminhos das imagens estão corretos
4. Teste a responsividade em diferentes dispositivos

## 📄 Licença

Este código é fornecido para uso no projeto Bio Active Hair.

---

**Desenvolvido para WordPress + Elementor**  
Versão: 1.0  
Data: 2024
