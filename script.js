
$(window).scroll(function() {
    if ($(window).scrollTop() >= 80) {
      $('.header-bg').css('background', 'crimson');
    } else {
      $('.header-bg').css('background', 'transparent');
    }
  });



    // typing animation
var typed = new Typed(".typing",{
    strings:["Ashmit k"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


// const aboutMe = document.getElementById('about-me');

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   if (scrollPosition > 500) {
//     aboutMe.classList.add('about-me-visible');
//   } else {
//     aboutMe.classList.remove('about-me-visible');
//   }
// });




