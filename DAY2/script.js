// gsap.from("#page1 .box", {
//   scale: 0,
//   opacity: 0,
//   rotate: 360,
//   duration: 1,
//   delay: 1,
// });
// gsap.from("#page2 .box", {
//   scale: 0,
//   opacity: 0,
//   rotate: 360,
//   duration: 1,
//   delay: 1,
//   //   scrollTrigger: "#page2 .box",
//   scrollTrigger: {
//     trigger: "#page2 .box",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     end: "top 30%",
//     scrub: 1,
//     pin:true
//   },
// });
// gsap.from("#page3 .box", {
//   scale: 0,
//   opacity: 0,
//   rotate: 360,
//   duration: 1,
//   delay: 1,
// });

gsap.to("#page2 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});
