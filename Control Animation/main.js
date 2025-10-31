// Add mouse movement interactivity to glass button
document.addEventListener("DOMContentLoaded", function () {
  // Get all glass elements
  const glassElements = document.querySelectorAll(".glass-button");

  // Add mousemove effect for each glass element
  glassElements.forEach((element) => {
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
  });

  // Handle mouse movement over glass elements
  function handleMouseMove(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add highlight effect
    const specular = this.querySelector(".glass-specular");
    if (specular) {
      specular.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.15) 0%,
        rgba(255,255,255,0.05) 30%,
        rgba(255,255,255,0) 60%
      )`;
    }
  }

  // Reset effects when mouse leaves
  function handleMouseLeave() {
    const filter = document.querySelector(
      "#glass-distortion feDisplacementMap"
    );
    if (filter) {
      filter.setAttribute("scale", "77");
    }

    const specular = this.querySelector(".glass-specular");
    if (specular) {
      specular.style.background = "none";
    }
  }
});

// GSAP Animation Control
document.addEventListener("DOMContentLoaded", (event) => {
  let anime = gsap.timeline();
  anime
    .to(
      ".box",
      {
        x: 500,
        rotate: 360,
        duration: 2,
        scale: 1.1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      },
      "same"
    )
    .to(
      ".box h1",
      {
        scale: 2,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      },
      "same"
    );

  // Note: The animation starts automatically upon page load,

  // we will make the button functional in the next steps
  // by using the queryselector method to target the button
  // and adding event listeners to it.

  document.querySelector("#pause").onclick = () => { anime.pause(); };
  document.querySelector("#resume").onclick = () => { anime.resume(); };
  document.querySelector("#reverse").onclick = () => { anime.reverse(); };
  document.querySelector("#restart").onclick = () => { anime.restart(); };
  document.querySelector("#play").onclick = () => { anime.play(); };


});
