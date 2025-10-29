// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  gsap.to(".box img", {
    clipPath: "polygon(100% 0, 100% 57%, 100% 100%, 0 100%, 0 59%, 0 0, 47% 0)",
  });

  gsap.from("nav", {
    y: -200,
    opacity: 0,
    duration: 2,
  });

  gsap.from(".herobadge span", {
    y: 200,
    autoAlpha: 0,
    duration: 3,
    delay: 2,
  });

  gsap.from(".herotext h1", {
    y: 200,
    opacity: 0,
    duration: 3,
    delay: 3,
  });

  gsap.from(".heropara p", {
    y: 200,
    opacity: 0,
    duration: 3,
    delay: 4,
  });

  gsap.from(".herobtn button", {
    y: 200,
    opacity: 0,
    duration: 3,
    delay: 5,
  });

  gsap.from(".ratingbadge span", {
    y: 200,
    opacity: 0,
    duration: 3,
    delay: 6,
  });
});
