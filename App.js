let tl = gsap.timeline();

tl.from(h1, {
  duration: 1,
  opacity: 0,
  y: -100,
  ease: "power2.out",
});

function showSiderbar(){
  const sidebar = document.querySelector('.menu_slider')
  sidebar.style.display = "flex"
}
function hidesidbar(){
  const sidebar = document.querySelector('.menu_slider')
  sidebar.style.display = "none"