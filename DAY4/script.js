const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const image = document.querySelector("#image");
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", () => {
    gsap.to(cursor,{
        scale: 2
    })
});
image.addEventListener("mouseleave", () => {
    gsap.to(cursor,{
        scale: 1
    })
});
