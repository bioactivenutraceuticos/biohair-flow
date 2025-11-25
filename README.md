# Bio Active Hair - Landing Page

Landing page moderna e responsiva para o produto Bio Active Hair, desenvolvida com React, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy

O site é automaticamente deployado na Hostinger via GitHub Actions quando você faz push para a branch `main`.

### Configuração do Deploy

Veja instruções completas em [DEPLOY-HOSTINGER.md](./DEPLOY-HOSTINGER.md)

**Secrets necessários no GitHub:**
- `FTP_SERVER` - Servidor FTP da Hostinger
- `FTP_USERNAME` - Usuário FTP
- `FTP_PASSWORD` - Senha FTP

## 📁 Estrutura do Projeto

```
biohair-flow/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes shadcn/ui
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── CompositionSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Index.tsx        # Página principal
│   ├── assets/              # Imagens e recursos
│   ├── lib/                 # Utilitários
│   ├── index.css            # Estilos globais
│   └── main.tsx             # Entry point
├── public/                  # Arquivos públicos
├── .github/workflows/       # GitHub Actions
└── dist/                    # Build de produção
```

## 🎨 Seções da Landing Page

1. **Hero** - Apresentação do produto com CTA
2. **Problema/Solução** - Benefícios do produto
3. **Showcase** - Destaque do produto
4. **Composição** - Ingredientes e certificações
5. **Antes/Depois** - Resultados visuais
6. **Preços** - Planos e ofertas
7. **Depoimentos** - Avaliações de clientes
8. **FAQ** - Perguntas frequentes
9. **Garantia** - Política de devolução
10. **Footer** - Informações de contato

## 🎯 Features

- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves
- ✅ Carrossel de depoimentos
- ✅ Accordion para FAQ
- ✅ Cards de preços interativos
- ✅ Navegação suave entre seções
- ✅ Otimizado para SEO
- ✅ Performance otimizada

## 🔧 Desenvolvimento

### Adicionar novo componente

```bash
# Componente shadcn/ui
npx shadcn-ui@latest add [component-name]

# Componente customizado
# Criar em src/components/NomeDoComponente.tsx
```

### Modificar cores e tema

Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --primary: 326 100% 40%;      /* Rosa principal */
  --secondary: 326 80% 60%;     /* Rosa secundário */
  --accent: 326 100% 95%;       /* Rosa claro */
  /* ... */
}
```

## 📝 Licença

Projeto proprietário - Bio Active Hair

## 👥 Contato

- **Email**: contato@bioactivehair.com
- **WhatsApp**: (37) 3351-5181
- **Site**: https://bioactivehair.com
