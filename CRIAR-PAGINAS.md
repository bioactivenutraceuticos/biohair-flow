# Como Criar Novas Páginas

## Método 1: Páginas React (Recomendado) ⭐

Use o React Router que já está configurado no projeto.

### Passo a Passo:

1. **Criar nova página em `src/pages/`**

```tsx
// src/pages/Contato.tsx
export default function Contato() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold">Entre em Contato</h1>
      <p>Formulário de contato aqui...</p>
    </div>
  );
}
```

2. **Adicionar rota no `src/App.tsx`**

```tsx
import Contato from "./pages/Contato";

// Dentro do <Routes>
<Route path="/contato" element={<Contato />} />
```

3. **Fazer commit e push**

```bash
git add .
git commit -m "feat: adiciona página de contato"
git push origin main
```

4. **Aguardar deploy automático**

5. **Acessar:** `bioactivehair.com/contato`

### Vantagens:
- ✅ Navegação rápida (SPA)
- ✅ Compartilha componentes e estilos
- ✅ Melhor performance
- ✅ Deploy automático

---

## Método 2: Múltiplas Páginas WordPress

Criar várias páginas no WordPress, cada uma mostrando uma parte diferente do app.

### Passo a Passo:

1. **No WordPress:**
   - Páginas → Adicionar nova
   - Título: "Contato"
   - No Elementor, adicione widget **Shortcode**
   - Insira: `[bioactive_hair_app page="contato"]`
   - Publique

2. **No código React, detecte a página:**

```tsx
// src/App.tsx
import { useEffect, useState } from 'react';

function App() {
  const [initialPage, setInitialPage] = useState('home');
  
  useEffect(() => {
    // Pega a página do WordPress
    const page = window.BIOACTIVE_INITIAL_PAGE || 'home';
    setInitialPage(page);
  }, []);
  
  // Renderiza componente baseado na página
  if (initialPage === 'contato') {
    return <Contato />;
  }
  
  return <Index />; // página home
}
```

3. **Fazer deploy**

### Exemplos de Shortcodes:

- Página Home: `[bioactive_hair_app]` ou `[bioactive_hair_app page="home"]`
- Página Contato: `[bioactive_hair_app page="contato"]`
- Página Sobre: `[bioactive_hair_app page="sobre"]`

---

## Método 3: Páginas WordPress Nativas

Criar páginas normais do WordPress (sem React).

### Quando usar:
- Páginas simples (Política de Privacidade, Termos)
- Conteúdo gerenciado pelo WordPress
- Blog posts

### Como fazer:
1. WordPress → Páginas → Adicionar nova
2. Use o editor do WordPress/Elementor normalmente
3. **NÃO** adicione o shortcode do React

---

## Recomendação Final

**Use o Método 1 (React Router)** para:
- Páginas do produto
- Fluxos de compra
- Páginas interativas

**Use o Método 3 (WordPress nativo)** para:
- Blog
- Páginas institucionais
- Conteúdo gerenciado por não-desenvolvedores

---

## Exemplo Completo: Adicionar Página "Sobre Nós"

### 1. Criar o componente

```tsx
// src/pages/Sobre.tsx
export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">
          Sobre a BioActive Hair
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nossa história começou...
        </p>
      </div>
    </div>
  );
}
```

### 2. Adicionar rota

```tsx
// src/App.tsx
import Sobre from "./pages/Sobre";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/sobre" element={<Sobre />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 3. Adicionar link no menu

```tsx
// src/components/Header.tsx
<nav>
  <a href="/">Home</a>
  <a href="/sobre">Sobre</a>
  <a href="/contato">Contato</a>
</nav>
```

### 4. Deploy

```bash
git add .
git commit -m "feat: adiciona página sobre nós"
git push origin main
```

Pronto! Página disponível em `bioactivehair.com/sobre` 🚀
