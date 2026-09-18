# BodySculp — versão atual do funil

Este repositório contém a versão atual trabalhada e aprovada em setembro de 2026. A publicação usa exclusivamente `public/`, sem reaproveitar a aplicação antiga. As versões anteriores continuam preservadas no histórico do Git.

## Publicação

Site estático na Vercel, sem instalação de dependências ou build. Configuração em `vercel.json`. Publicar com `vercel --prod`.

## Conteúdo

- `public/index.html`: aplicação completa, estilos e quiz.
- `public/assets/`: imagens otimizadas, vídeos MP4 e capas.
- Imagens carregadas sob demanda; vídeos locais carregados próximo à área visível e pausados fora dela.
- Player externo Tynk na etapa de diagnóstico, com um único botão de solução abaixo.
- Checkout: https://checkout.sellpay.com.br/c/ntdb

Os vídeos MP4 usam fast start. Os arquivos estáticos possuem cache na CDN. O iframe Tynk depende do serviço externo.
