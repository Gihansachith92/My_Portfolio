/********************  Toggle Icon Navbar *****************************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('fa-xmark');
   navbar.classList.toggle('active');
}


/********************  scroll section active link *****************************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };

  });

 /********************  stiky navbar *****************************/
 let header = document.querySelector('header');
 header.classList.toggle('sticky' ,window.scrollY > 100 );

 /********************  remove toggle icon and navbar *****************************/
 menuIcon.classList.remove('fa-xmark');
 navbar.classList.remove('active');


}

 /********************  scroll reveal *****************************/
 ScrollReveal({ 
  distance: '80px',
  duration: 2000,
  delay: 200,

  });


  ScrollReveal().reveal('.home-content, heading', { origin:'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'buttom' });
  ScrollReveal().reveal('.about-img', { origin:'left' });
  ScrollReveal().reveal(' .about-content', { origin:'right' });

 /********************  typed js *****************************/
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Web Designer', 'Java Developer'],
  typeSpeed: 30,
  backSpeed: 40,
  backDelay: 800,
  loop: true,
});
