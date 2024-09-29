const inputImagem = document
 .getElementById('inputImagem');
const canvas = document.getElementById(
 'canvas');
const progressBar = document
 .getElementById('progressBar');
const progressFill = document
 .getElementById('progressFill');
const imagemWebp = document
 .getElementById('imagemWebp');
const downloadLink = document
 .getElementById('downloadLink');
const qualityRange = document
 .getElementById('qualityRange');
const qualityValue = document
 .getElementById('qualityValue');

// Atualiza o valor da qualidade no label ao mover o slider
qualityRange.addEventListener('input',
 function() {
  qualityValue.textContent =
   qualityRange.value;
 });

inputImagem.addEventListener('change',
 function(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Extrair o nome do ficheiro original (sem a extensão)
  const originalName = file.name
   .split('.').slice(0, -1).join('.');

  const reader = new FileReader();

  reader.onload = function(e) {
   const img = new Image();
   img.src = e.target.result;

   img.onload = function() {
    // Atualizar barra de progresso (início)
    progressBar.style.display =
     'block';
    progressFill.style.width =
     '30%';

    // Definir o tamanho do canvas de acordo com a imagem carregada
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext(
     '2d');
    ctx.drawImage(img, 0, 0);

    // Ajustar a qualidade com base no slider
    const qualidade = qualityRange
     .value / 100;

    // Converter o conteúdo do canvas para WebP
    const webpDataUrl = canvas
     .toDataURL('image/webp',
      qualidade);

    // Atualizar barra de progresso (quase completo)
    progressFill.style.width =
     '70%';

    // Mostrar a imagem convertida
    imagemWebp.src = webpDataUrl;
    imagemWebp.onload = function() {
     // Atualizar barra de progresso (completo)
     progressFill.style.width =
      '100%';

     // Mostrar o link de download e a imagem convertida
     downloadLink.href =
      webpDataUrl;
     downloadLink.download =
      originalName +
      '.webp'; // Manter o nome original e usar extensão .webp
     downloadLink.style.display =
      'inline-block';
     imagemWebp.style.display =
      'block';

     // Ocultar barra de progresso após um pequeno atraso
     setTimeout(() => {
      progressBar.style.display =
       'none';
      progressFill.style.width =
       '0';
     }, 500);
    };
   };
  };

  reader.readAsDataURL(file);
 });

// Adicionar evento de clique ao link de download
downloadLink.addEventListener('click',
 function() {
  // Esperar um curto intervalo para o download iniciar e recarregar a página
  setTimeout(() => {
    location
     .reload(); // Recarregar a página após o download
   },
   2000
  ); // O atraso garante que o download tenha tempo de ser processado
 });
