document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.topnav a');

  links.forEach(link => {
    // Create a new progress bar element
    const progressBar = document.createElement('span');
    progressBar.style.position = 'absolute';
    progressBar.style.height = '2px';
    progressBar.style.bottom = '0';
    progressBar.style.left = '0';
    progressBar.style.backgroundColor = "red"; // Change this to match your design
    progressBar.style.width = '0';
    link.style.position = 'relative';
    link.appendChild(progressBar);

    link.addEventListener('mouseenter', function () {
      const text = this.textContent;
      const textWidth = getTextWidth(text, '29px Arial'); // Include the font family
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
window.addEventListener('click', function(e) {
  const y = e.clientY; // Get the y position of the click
  const scrolled = window.scrollY || window.pageYOffset; // Get how much the window has scrolled
  const height = window.innerHeight || document.documentElement.clientHeight; // Get the window height

  const scrollAmount = height / 2; // Set the scroll amount to half of the window height

  if (y < height / 2) {
    // If the click was in the top half of the window, scroll up
    window.scrollTo(0, scrolled - scrollAmount);
  } else {
    // If the click was in the bottom half of the window, scroll down
    window.scrollTo(0, scrolled + scrollAmount);
  }
});