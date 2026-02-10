// Smooth scroll for nav
// document.querySelectorAll('.navbar a').forEach(link => {
//   link.addEventListener('click', e => {
//     if(link.getAttribute('href').startsWith('#')){
//       e.preventDefault();
//       document.querySelector(link.getAttribute('href'))
//         ?.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// Animated counters
const counters = document.querySelectorAll('[data-count]');

const animateCounter = counter => {
  const target = +counter.dataset.count;
  let count = 0;
  const step = target / 120;

  const update = () => {
    count += step;
    if(count < target){
      counter.textContent = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.textContent = target.toLocaleString() + '+';
    }
  };
  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.6 });

counters.forEach(c => observer.observe(c));




// Sticky navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


// Intro stats counters (reuse existing animateCounter)
const introCounters = document.querySelectorAll('.intro .stat-item [data-count]');
const introObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      introObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });

introCounters.forEach(c => introObserver.observe(c));

// Smooth scroll for intro button
document.querySelector('.intro-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
});




let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Every 3 seconds






