
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".container > section");
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


// Define the tastymonials function
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
tastymonials();


// ---------color change----------

function colorChange(){

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.firstpage',
      // markers: true,
      start: '80% 0%',
      end: '90%  0%',
      scrub: 1,
    },
  });
  
  tl.to(".bestSellingProduct", {
    backgroundColor: "#ffd788",
    duration: 1
  });
}

colorChange();  


Shery.imageEffect(".top", {
  style: 5, //Select Style
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.86,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.2427184466019416},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.53,"range":[1,15]},"durationOut":{"value":1.07,"range":[0.1,5]},"durationIn":{"value":1.04,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // debug: true, // Debug Panel
  gooey: true, 
  
});