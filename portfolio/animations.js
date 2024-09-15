import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

  gsap.from('#home .line-one', {
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from('#home .line-two', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from('#home .line-three', {
    opacity: 0,
    x: 100,
    duration: 1.5,
    delay: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#home",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  const projectCards = document.querySelectorAll('#projects .card');

  projectCards.forEach(card => {
    const projectLogo = card.querySelector('.project-logo img');
    const projectRole = card.querySelector('.project-role p');
    const projectName = card.querySelector('.project-name');
    const projectDescription = card.querySelector('.project-description');
    const projectButton = card.querySelector('.button-dark');

    gsap.from(projectLogo, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    gsap.from(projectRole, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    gsap.from(projectName, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    gsap.from(projectDescription, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    gsap.from(projectButton, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });
  });

  const aboutHeading = document.querySelector('.about-heading');
  const aboutText = document.querySelector('.about-information');

  gsap.from(aboutHeading, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(aboutText, {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      toggleActions: "play reverse play reverse"
    }
  });

  const socialIcons = document.querySelectorAll('footer .socials nav');
  const socialText = document.querySelectorAll('footer .socials-text');

  gsap.from(socialText, {
    opacity: 0,
    duration: 0.8,
    ease: "power2.in",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "footer",
      start: "top 100%",
      toggleActions: "play reverse play reverse"
    }
  });

  gsap.from(socialIcons, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    }
  });
});
