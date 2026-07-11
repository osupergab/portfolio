# portfolio

Portfólio de designer — site estático (HTML/CSS/JS puro, sem build).

## Como rodar localmente

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8000
```

Depois acesse http://localhost:8000

## Como editar o conteúdo

Todo o conteúdo fica em `data.js`:

- `PROJECTS`: lista de trabalhos. Cada projeto tem `title`, `client`, `year`, `cover`, `gallery` (carrossel de cartazes), `intro`, `downloads` e `phases`.
- Cada fase (`phases`) pode ter: `heading`, `text`, `image` + `imageCaption`, `extraImages` (lista de `{ image, caption }`), `video` (vídeo em loop), `showGallery: true` (repete o carrossel da galeria) e `layout` (`single`, `triple`, `book`).
- `downloads`: botões de download no final da página (cada item tem `label` e `file`).
- `ABOUT` e `SITE`: dados da página "Sobre mim" e informações gerais.

Imagens, vídeos e arquivos para download ficam na pasta `assets/`.
