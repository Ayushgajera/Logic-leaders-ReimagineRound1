gsap.registerPlugin(ScrollTrigger);

function video() {
  gsap.from(".video", {
    duration: 1,
    opacity: 0,
    // y: 50,
    scale:0.8,
    start:"-80% -80%",
    ease: "expo",
    end:"bottom bottom",
    scrollTrigger: {
      scrub:1,
      trigger: ".video",
      // markers: true,
      // toggleActions: "restart pause reverse pause",
    },
  });
}
video();

function horizontal() {
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
        scrub: 4,
      },
    });
  });
}
horizontal();

function mainpage() {
  let tl = gsap.timeline();
  const img = document.querySelector(".img");

  tl.from(
    ".home-page > .left",
    {
      duration: 1.5,
      opacity: 0,
      ease: "bounce.out",
      x: "-150%",
    },
    "home"
  );
  tl.from(
    ".home-page > .right",
    {
      duration: 1.5,
      opacity: 0,
      ease: "bounce.out",
      x: "150%",
    },
    "home"
  );
  tl.to(
    ".home-page > .img",
    {
      duration: 1,
      onStart: () => {
        img.classList.remove("hidden");
      },
      ease: "elastic.out(1.5,1)",
      scale: 1,
    },
    "home"
  );
}
mainpage();

function menuani() {
  let tl = gsap.timeline();
  let menuIcon = document.querySelector(".menu-icon");
  let closeIcon = document.querySelector(".close");
  let menu = document.querySelector(".menu");

  tl.from(".menu", {
    duration: 1,
    opacity: 0,
    onStart: () => {
      menu.classList.remove("hidden");
    },
    x: "100%",
  });
  tl.from(".menu > .menu-item > h2 , .menu > .menu-item > div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    x: "30%",
  });
  tl.from(closeIcon, {
    opacity: 0,
    duration: 0.2,
  });
  tl.pause();

  menuIcon.addEventListener("click", () => {
    tl.play();
  });

  closeIcon.addEventListener("click", () => {
    tl.reverse();
  });
}
menuani();

function tastymonials() {
  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

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
            card.style.filter = `brightness(${
              1 - progress * (1 - toBrightness)
            })`;
          },
        });
      }
    });
  });
}
tastymonials();

function colorChange() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".firstpage",
      // markers: true,
      start: "-50% top",
      end: "90%  0%",
      scrub: 1,
    },
  });

  tl.to(".bestSellingProduct", {
    backgroundColor: "#ffd788",
    duration: 1,
  });
}
colorChange();
