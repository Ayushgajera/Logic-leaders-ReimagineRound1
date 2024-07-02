// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main-container"),
  smooth: true
});

// Sync Locomotive Scroll with ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".main-container").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and LocomotiveScroll after setup
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Define the scroll tween for horizontal sections
const sections = gsap.utils.toArray(".container > section");
const scrollTween = gsap.to(sections, {
  xPercent: -95 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    scroller: ".main-container"
  }
});


// Define the tastymonials function
function tastymonials() {
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
        scroller: ".main-container",
        onUpdate: (self) => {
          const progress = self.progress;
          card.style.transform = `scale(${1 - progress * (1 - toScale)})`;
          card.style.filter = `brightness(${1 - progress * (1 - toBrightness)})`;
        }
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", tastymonials);