# Descrição Geral do Projeto: #

**Veja o projeto ao vivo:**

[Conversor PNG para WebP](https://ninja1375.github.io/Conversor-PNG-para-WebP/)

**Este projeto é um Conversor de Imagens para WebP feito em HTML, CSS e JavaScript.**

A principal função deste conversor é permitir que os usuários façam o upload de imagens nos formatos mais comuns (PNG, JPEG, GIF, BMP.) e convertam essas imagens para o formato WebP, que oferece uma compressão mais eficiente, mantendo a qualidade da imagem.

O projeto foi desenvolvido para ser responsivo, garantindo que funcione de forma eficiente tanto em dispositivos móveis quanto em desktops. Ele também inclui funcionalidades que melhoram a experiência do usuário, como barra de progresso durante a conversão, ajuste de qualidade da imagem convertida e recarregamento automático da página após o download da imagem.

## Funcionalidades Detalhadas: ##

**1 - Upload de Vários Formatos de Imagem:**

O conversor permite que o usuário carregue imagens em diferentes formatos como PNG, JPEG, GIF e BMP. Através do <input type="file">, o usuário pode selecionar a imagem a ser convertida. Atributos como accept são usados para restringir os tipos de imagens que podem ser carregados.

**2 - Conversão de Imagens para o Formato WebP:**

A funcionalidade principal do projeto é a conversão de imagens carregadas para o formato WebP. O Canvas API do navegador é usado para realizar essa conversão. A imagem carregada pelo usuário é processada no canvas, onde o conteúdo da imagem é desenhado. Em seguida, o conteúdo do canvas é convertido para o formato WebP através do método canvas.toDataURL('image/webp').

**3 - Ajuste Dinâmico da Qualidade da Imagem WebP:**

O usuário pode ajustar a qualidade da imagem WebP antes de realizar a conversão, utilizando um slider (input type="range"). A qualidade pode variar de 1% (maior compressão, menor qualidade) a 100% (sem compressão, máxima qualidade). O valor da qualidade é utilizado no método canvas.toDataURL('image/webp', quality), onde o parâmetro quality determina a compressão aplicada à imagem convertida.

**4 - Exibição da Imagem Convertida:**

Após a conversão da imagem, a imagem WebP resultante é exibida ao usuário no próprio navegador. A tag <img> é usada para mostrar a imagem convertida com o atributo src preenchido pela URL de dados gerada pelo canvas.toDataURL.

**5 - Download da Imagem Convertida:**

O usuário pode fazer o download da imagem WebP convertida clicando no link de download que é gerado dinamicamente. O nome original da  imagem carregado é mantido, com a extensão alterada para .webp. Isso é feito extraindo o nome original da imagem e removendo sua extensão, e, em seguida, concatenando .webp para o novo nome.

**6 - Barra de Progresso Durante a Conversão:**

Para melhorar a experiência do usuário, o projeto inclui uma barra de progresso que é exibida enquanto a imagem está a ser processada e convertida. A barra de progresso é atualizada em três etapas: início (30%), processamento (70%) e finalização (100%). A barra é então ocultada quando a conversão é concluída.

**7 - Recarregamento Automático da Página Após o Download:**

Uma vez que o usuário clica no link de download da imagem convertida, a página é automaticamente recarregada após um curto intervalo (2 segundos). Isso garante que o conversor volte ao seu estado inicial, pronto para converter novas imagens sem que o usuário precise atualizar a página manualmente.

**8 - Design Responsivo:**

O projeto foi desenvolvido com CSS responsivo, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis a desktops. A interface mantém-se simples e eficiente, com botões, sliders e barras de progresso fáceis de usar em qualquer dispositivo.

## Explicação das Tecnologias Usadas: ##

**1 - HTML:**

A estrutura básica da aplicação é feita em HTML, com tags semânticas que definem a interface de usuário e interagem com o JavaScript. O formulário para carregar a imagem (<input type="file">), o slider de ajuste de qualidade e o link para download são os principais componentes da interface.

**2 - CSS:**

O CSS é utilizado para estilizar a aplicação, garantindo que tenha uma aparência moderna e atraente, com cores suaves e transições. A responsividade é garantida através de media queries, que ajustam o layout e o tamanho dos elementos dependendo do dispositivo usado.

**3 - JavaScript:**

JavaScript é a principal linguagem de programação usada para manipular as imagens, interagir com o usuário e controlar a lógica de conversão. O FileReader API é utilizado para ler os arquivos carregados pelo usuário e o Canvas API é usado para desenhar e converter a imagem para WebP. O JavaScript também gera a lógica do slider de qualidade, a barra de progresso e o recarregamento automático da página.
