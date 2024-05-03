// Using querySelectorAll to select all the cards at one go. 
document.querySelectorAll(".card").forEach((e) => {

  const layer = e.querySelector(".layer"),
        title = e.querySelector(".delay1"),
        paragraph = e.querySelector(".delay");

// these are the events that will take place when mouse will enter in the cards
  e.addEventListener("mouseenter", () => {

    gsap.to(e.querySelector("#title"), {
      y: -15,
      opacity: 0,
      ease: "power4",
    });
    
  //GSAP for the box that will grow when mouse enters
    gsap.to(layer, {
      width: "100%",
      opacity: 0.8,
      height: "80%",
      duration: 0.5,
      ease: "power4",
    });

  //GSAP for the elements inside the box
    gsap.to(title, {
      opacity: 1,
      y: -12,
      ease: "power4",
      delay: 0.5,
    });

    gsap.to(paragraph, {
      opacity: 1,
      y: -12,
      ease: "power4",
      delay: 0.7,
    });
  });

//and these are the events that will take place when mouse leaves the cards
  e.addEventListener("mouseleave", () => {
    gsap.to(e.querySelector("#title"), {
      y: 0,
      opacity: 1,
      ease: "power4",
    });

    gsap.to(layer, {
      width: 0,
      height: 0,
      duration: 0.5,
      ease: "power4",
      opacity: 0,
    });

    gsap.to(title, {
      opacity: 0,
      y: 0,
      ease: "power4",
    });

    gsap.to(paragraph, {
      opacity: 0,
      y: 0,
      ease: "power4",
    });
  });
});