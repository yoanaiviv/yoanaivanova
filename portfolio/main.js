import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".card");

cards.forEach((card, index) => {
  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: () => `top bottom-=100`,
      end: () => `top top+=40`,
      scrub: true,
      invalidateOnRefresh: true
    },
    ease: "none",
    scale: () => 1 - (cards.length - index) * 0.025
  });

  ScrollTrigger.create({
    trigger: card,
    start: "top top",
    pin: true,
    pinSpacing: false,
    id: 'pin',
    end: 'max',
    invalidateOnRefresh: true,
  });
});

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('.hover-trigger');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursor.classList.remove('hover');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click');
  cursor.classList.add('hover');
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
