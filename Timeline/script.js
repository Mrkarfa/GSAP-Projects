document.addEventListener("DOMContentLoaded", (event) => {
  let tl = gsap.timeline();

  tl.from(".text-container h1", {
    y: 400,
    duration: 2,
  })
    .to(
      "#text1",
      {
        y: -70,
        duration: 1,
      },
      "time1"
    )
    .to(
      "#text2",
      {
        y: -70,
        duration: 1,
      },
      "time1"
    )
    .to(
      "#text3",
      {
        y: 25,
        duration: 1,
      },
      "time1"
    )
    .to(
      ".pic-container",
      {
        opacity: 1,
        width: "30%",
        height: "30%",
        duration: 1,
      },
      "time1"
    )
    .to(".pic-container", {
      width: "100%",
      height: "100%",
      duration: 2,
    });
});
