
$(window).scroll(function () {
  if ($(window).scrollTop() >= 80) {
    $('.header-bg').css('background', '#780B21');
  } else {
    $('.header-bg').css('background', 'transparent');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Disable scrolling on page load
  document.documentElement.style.overflow = 'hidden';
  window.scrollTo(0, 0);


  
  setTimeout(function () {
      document.documentElement.style.overflow = 'auto';
  }, 1500);
});





window.addEventListener("load",function(){
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";

    
}, 1500);
})



// typing animation
var typed = new Typed(".typing", {
  strings: ["Ashmit k"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// tooltips

tippy('#html', {
  content: 'HTML or The HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
  animation: 'fade',
});
tippy('#css', {
  content: 'CSS, or Cascading Style Sheets, is a style sheet language used to describe the visual presentation of HTML and XML documents, allowing developers to control the layout, design, and appearance of web pages.',
  animation: 'fade'
});
tippy('#js', {
  content: 'JavaScript is a versatile programming language that enables dynamic behavior and interactivity on web pages, making it an essential tool for web development.',
  animation: 'fade'
});
tippy('#bootstrap', {
  content: 'Bootstrap is an open-source framework that simplifies the process of designing and developing responsive websites and web applications with pre-built CSS and JavaScript components.',
  animation: 'fade'
});
tippy('#github', {
  content: 'GitHub is a web-based platform that enables version control, collaboration, and hosting of code repositories, making it a central hub for developers to manage and share their projects.',
  animation: 'fade'
});
tippy('#jquery', {
  content: 'jQuery is a fast and concise JavaScript library that simplifies HTML document traversal, event handling, and animation, making it easier to build interactive and dynamic web pages.',
  animation: 'fade'
});
tippy('#react', {
  content: 'React is a powerful JavaScript library for building user interfaces that allows developers to create reusable UI components and efficiently update and render data-driven views.',
  animation: 'fade'
});
tippy('#sass', {
  content: 'Sass is a CSS preprocessor that enhances the capabilities of CSS by providing features like variables, mixins, nesting, and inheritance, simplifying the process of writing and maintaining CSS code.',
  animation: 'fade'
});








