# Site da Zahav Digital

Novo site institucional e comercial da Zahav Digital, construído isoladamente neste repositório.

## Stack

- React
- TypeScript
- Vite
- React Router
- Lucide Icons

## Páginas

- `/` — Home
- `/solucoes` — Soluções
- `/como-funciona` — Método de implementação
- `/zahav-ia` — Agentes e inteligência artificial
- `/segmentos` — Segmentos atendidos
- `/sobre` — Sobre a Zahav
- `/contato` — Diagnóstico inicial

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O GitHub Actions valida automaticamente o build em cada Pull Request.

## Publicação

O projeto é estático e pode ser publicado em Vercel, Cloudflare Pages, Netlify ou outra hospedagem compatível com Vite. Para rotas SPA, configure fallback de todas as rotas para `/index.html`.

## Contato

O site não contém telefone, e-mail ou WhatsApp fictício. O formulário está preparado visualmente e deve ser conectado ao canal/CRM oficial quando os dados públicos da Zahav forem confirmados.
