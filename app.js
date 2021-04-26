gsap.fromTo('.logo_container', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2, ease: 'slow'})
gsap.fromTo('.menu li a', {opacity: 0}, {opacity: 1, duration: 2, stagger: 0.3, ease: 'slow'})
gsap.from('.icons_container', {opacity: 0}, {opacity: 1, duration: 2, stagger: 0.3, ease: 'slow'})
gsap.from('.icons a', {opacity: 0}, {opacity: 1, duration: 2, stagger: 0.3, ease: 'slow'})
gsap.fromTo('.hamburger', {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 2, stagger: 0.3, ease: 'slow'})


//SlideShow 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}