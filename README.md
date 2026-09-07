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

## Estado atual

- identidade visual premium azul, branco e preto
- marca Zahav aplicada no header e footer
- apresentação visual da plataforma/CRM
- SEO específico por rota
- navegação responsiva
- formulário seguro, sem contato fictício
- build validado no GitHub Actions

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O GitHub Actions valida automaticamente o build em cada Pull Request. O build da V2 foi validado com sucesso.

## Publicação

O projeto é estático e está preparado para Vercel, Cloudflare Pages, Netlify ou outra hospedagem compatível com Vite. O arquivo `vercel.json` já inclui o fallback necessário para as rotas SPA.

## Próximas integrações

O site não contém telefone, e-mail ou WhatsApp fictício. O formulário deve ser conectado ao canal/CRM oficial quando os dados públicos da Zahav forem confirmados. As imagens originais da plataforma e os arquivos oficiais da marca podem substituir ou complementar as representações visuais assim que forem enviados ao repositório como assets binários.
