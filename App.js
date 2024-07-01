gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container > section");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -95 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
  },
});

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  },
});

sections.forEach((section) => {
  gsap.from(section.querySelector("img"), {
    y: -150,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left right",
      scrub:4,
    },
  });
});

function tastymonials (){

  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];
        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const toBrightness = 0.6;
        
        ScrollTrigger.create({
          trigger: nextCard,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            card.style.transform = `scale(${1 - progress * (1 - toScale)})`;
            card.style.filter = `brightness(${1 - progress * (1 - toBrightness)})`;
          }
        });
      }
    });
  });
}
// tastymonials();
