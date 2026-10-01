const tl = gsap.timeline();

tl.to("#box", {
  x: 1000,
  duration: 2,
  //   ease: "power1.inOut",
  //   delay: 1,
  //   repeat: -1,
  //   yoyo: true,
  //   rotate: 360,
  //   backgroundColor: "blue",
  //   scale: 2,
  //   borderRadius: "20px",
});
tl.to("#box1", {
  x: 300,
  //   x: 900,
  duration: 2,
  //   ease: "power1.inOut",
  //   delay: 1,
  //   repeat: -1,
  //   yoyo: true,
});

// gsap.from("h1", {
//   opacity: 0,
//   y: 40,
// //   duration: ,
//   ease: "power1.inOut",

//   stagger: 1,
// });
