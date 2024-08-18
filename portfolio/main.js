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
