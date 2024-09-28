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
    const homeInView = isInViewport(homeSection);
    const footerInView = isInViewport(footer);
    const projectsInView = isInViewport(projectsSection);

    if (homeInView) {
      logo.src = "/assets/logo.svg"; 
      navBar.classList.add('home-active');
      navBar.classList.remove('about-active', 'projects-active', 'footer-active');
    } else if (footerInView && projectsInView) {
      logo.src = "/assets/logo-light.png"; 
      navBar.classList.add('footer-active');
      navBar.classList.remove('about-active', 'projects-active', 'home-active');
    } 
  });


// Function to check the position of the about section
function checkAboutSection() {
const navbarHeight = navbar.offsetHeight;
const aboutRect = aboutSection.getBoundingClientRect();
const overlapPoint = aboutRect.top - navbarHeight - 5; 

if (overlapPoint <= 0 && aboutRect.bottom >= 0 && !navbar.classList.contains('about-active')) {
  navbar.classList.add('about-active');
  navbar.classList.remove('projects-active');
  navbar.classList.remove('home-active');
  logo.src = "/assets/logo-light.png"; 
} else if (overlapPoint > 0 && aboutRect.bottom < 1 && navbar.classList.contains('about-active')) {
  navbar.classList.remove('about-active');
}
}

// Function to check the position of the Projects section
function checkProjectsSection() {
const navbarHeight = navbar.offsetHeight;
const projectsRect = projectsSection.getBoundingClientRect();
const overlapPoint = projectsRect.top - navbarHeight;

if (overlapPoint <= 0 && projectsRect.bottom >= 1 && !navbar.classList.contains('projects-active')) {
  navbar.classList.add('projects-active');
  navbar.classList.remove('about-active');
  navbar.classList.remove('home-active');
  logo.src = "/assets/logo.svg"; 
} else if (overlapPoint > 0 && projectsRect.bottom < 1 && navbar.classList.contains('projects-active')) {
  navbar.classList.remove('projects-active');
}
}

// Add scroll event listener
window.addEventListener('scroll', checkAboutSection);
window.addEventListener('scroll', checkProjectsSection);

// Also check on page load
window.addEventListener('load', checkAboutSection);
window.addEventListener('load', checkProjectsSection);
});
