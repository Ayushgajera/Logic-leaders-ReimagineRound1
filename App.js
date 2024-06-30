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
