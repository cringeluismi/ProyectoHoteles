document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.topnav a');

  links.forEach(link => {
    link.addEventListener('mouseenter', function () {
      const text = this.textContent;
      const textWidth = getTextWidth(text, '25px'); // Utilizamos la fuente actual del enlace
      const progressBar = this.querySelector(':after');
      progressBar.style.width = `${textWidth}px`;
    });

    link.addEventListener('mouseleave', function () {
      const progressBar = this.querySelector(':after');
      progressBar.style.width = '0';
    });
  });

  // Función para obtener el ancho de un texto dado y una fuente
  function getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const width = context.measureText(text).width;
    return width;
  }
});
