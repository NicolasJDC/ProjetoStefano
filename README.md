# Stefano Chaves

Site institucional da marca pessoal de Stefano Chaves — barbeiro, educador e empreendedor.

O projeto apresenta sua trajetória, atuação profissional, Apex Barber, parceria Garden For Men, livro e canais de conteúdo em uma experiência editorial responsiva.

## Tecnologias

- React 19
- TanStack Start e TanStack Router
- Vite
- TypeScript
- Tailwind CSS 4

## Pré-requisitos

- Node.js 22 ou superior
- npm

## Como executar

```bash
npm install
npm run dev
```

O servidor de desenvolvimento exibirá o endereço local no terminal.

## Comandos

```bash
# Verificação de estilo e código
npm run lint

# Gerar a versão de produção
npm run build

# Visualizar a versão de produção
npm run preview
```

## Estrutura principal

```text
images/                     Fotografias e identidade visual usadas pelo site
public/                     Arquivos públicos, como favicon e robots.txt
src/
  assets/media.ts           Catálogo centralizado de mídias locais
  components/site/          Header, hero e seções editoriais
  lib/links.ts              Links externos oficiais
  routes/                   Rotas e metadados SEO
  styles.css                Design system e estilos globais
```

## Mídias e conteúdo

As imagens ficam em `images/` e são importadas por `src/assets/media.ts`, para que o Vite gere arquivos versionados no build.

Os links de WhatsApp, Instagram, YouTube e Kiwify estão centralizados em `src/lib/links.ts`. Preserve-os ao fazer alterações de conteúdo.

## Publicação

Execute `npm run build`. O projeto prepara automaticamente a saída compatível com a Vercel em `.vercel/output` (diretório ignorado pelo Git).

## Domínio e SEO

Enquanto o domínio próprio não estiver ativo, os metadados usam `https://stefanochaves.vercel.app` para que os previews de compartilhamento continuem funcionando. Quando `stefanochaves.com.br` estiver configurado na Vercel, defina a variável de ambiente abaixo nos ambientes de produção e preview:

```bash
VITE_SITE_URL=https://stefanochaves.com.br
```

Ela atualiza canonical, Open Graph, Twitter Card e os dados estruturados sem alteração de código.
