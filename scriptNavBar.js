document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.topnav a');

  links.forEach(link => {
    // Create a new progress bar element
    const progressBar = document.createElement('span');
    progressBar.style.position = 'absolute';
    progressBar.style.height = '2px';
    progressBar.style.bottom = '0';
    progressBar.style.left = '0';
    progressBar.style.backgroundColor = 'red'; // Change this to match your design
    progressBar.style.width = '0';
    link.style.position = 'relative';
    link.appendChild(progressBar);

    link.addEventListener('mouseenter', function () {
      const text = this.textContent;
      const textWidth = getTextWidth(text, '28px Arial'); // Include the font family
      progressBar.style.width = `${textWidth}px`;
    });

    link.addEventListener('mouseleave', function () {
      progressBar.style.width = '0';
    });
  });

  // Function to get the width of a given text and a font
  function getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font; // Set the font size and family
    const width = context.measureText(text).width;
    return width;
  }
});