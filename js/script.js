var App = (function() {
  const htmlRef = document.documentElement;
  const windowRef = window;
  const preloaderEl = document.querySelector('.preloader');
  const headerArea = document.querySelector('.header-top-area');
  const filterList = document.querySelector('.portfolio-filters');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const slider = document.querySelector('.testimonial-slider');
  const slides = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.slider-control--prev');
  const nextBtn = document.querySelector('.slider-control--next');
  const dotsContainer = document.querySelector('.slider-dots');
  const navToggle = document.querySelector('.nav-toggle'); // New
  const navList = document.querySelector('.nav-list'); // New
  let currentSlide = 0;

  // on window load call back function
  const onWinLoad = function() {
    // preloader - handling
    if (preloaderEl) {
      preloaderEl.style.opacity = '0';
      preloaderEl.style.visibility = 'hidden';
      setTimeout(() => {
        preloaderEl.style.display = 'none';
      }, 500); 
    }
  };

  // on window scroll call back function
  const onWinScroll = function() {
    // header
    if (windowRef.scrollY > 200) {
      if (headerArea) {
        headerArea.classList.add('scrolled');
      }
    } else {
      if (headerArea) {
        headerArea.classList.remove('scrolled');
      }
    }
  };

  // Portfolio filter handler
  const onFilterClick = function(e) {
    if (e.target.tagName === 'LI') {
      const filterItems = document.querySelectorAll('.filter-item');
      filterItems.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');

      const filterValue = e.target.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemFilter = item.getAttribute('data-filter-item');
        if (filterValue === 'all' || itemFilter.includes(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
  };

  // Mobile navigation toggle handler
  const toggleNav = function() {
    if (navList) {
      navList.classList.toggle('is-open');
    }
  };

  // Testimonial slider logic
  const initSlider = function() {
    if (!slider || slides.length === 0) return;

    // Create dots for each slide
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    const updateSlider = () => {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    };

    const goToSlide = (index) => {
      currentSlide = index;
      updateSlider();
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    };

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    
    setInterval(nextSlide, 5000); 
  };

  // binds the events to required elements
  const bindEvents = function() {
    windowRef.addEventListener('load', onWinLoad);
    windowRef.addEventListener('scroll', onWinScroll);

    if (filterList) {
      filterList.addEventListener('click', onFilterClick);
    }
    
    if (navToggle) { // New
      navToggle.addEventListener('click', toggleNav);
    }
  };

  // initializes
  const init = function() {
    bindEvents();
    initSlider();
  };

  return {
    init: init
  };
})();

// initialize
App.init();