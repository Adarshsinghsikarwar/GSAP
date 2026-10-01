function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var halfValue = Math.floor(splittedText.length / 2);
  var clutter = "";

  splittedText.forEach((char, index) => {
    if (index > halfValue) {
      clutter += `<span class="a">${char}</span>`;
    } else {
      clutter += `<span class="b">${char}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakText();
gsap.from("h1 .a", {
  y: 100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: -0.2,
});
gsap.from("h1 .b", {
  y: 100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
