var intialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 150 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
  path = `M 10 100 Q ${e.offsetX} ${e.offsetY} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", (e) => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.2,
    ease: "elastic.out(1, 0.2)",
  });
});
