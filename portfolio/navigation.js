document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector('.navigation-bar');
    const logo = document.getElementById('nav-logo');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const homeSection = document.getElementById('home');
    const footer = document.querySelector('footer');
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  
    // Scroll event listener
    window.addEventListener('scroll', function() {
      const aboutInView = isInViewport(aboutSection);
      const projectsInView = isInViewport(projectsSection);
      const homeInView = isInViewport(homeSection);
      const footerInView = isInViewport(footer);
  
      if (aboutInView) {
        logo.src = "/assets/logo-light.png"; 
        navBar.classList.add('about-active');
        navBar.classList.remove('projects-active', 'home-active', 'footer-active');
      } else if (projectsInView) {
        logo.src = "/assets/logo.svg"; 
        navBar.classList.add('projects-active');
        navBar.classList.remove('about-active', 'home-active', 'footer-active');
      } else if (homeInView) {
        logo.src = "/assets/logo.svg"; 
        navBar.classList.add('home-active');
        navBar.classList.remove('about-active', 'projects-active', 'footer-active');
      } else if (footerInView) {
        logo.src = "/assets/logo-light.png"; 
        navBar.classList.add('footer-active');
        navBar.classList.remove('about-active', 'projects-active', 'home-active');
      } else {
        logo.src = "/assets/logo.svg"; 
        navBar.classList.remove('about-active', 'projects-active', 'home-active', 'footer-active');
      }
    });
  });
  