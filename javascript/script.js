const container = document.querySelector("#container");

let divWidth = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (let i = 1; i <= divWidth * divWidth; i++) {
  const div = document.createElement("div");
  div.classList.add("squre-div");
  container.appendChild(div);
}

function drow(e) {
  if (e.type === "mouseover" && !mouseDown) return;

  this.style.backgroundColor = "black";
}

const divs = document.querySelectorAll(".squre-div");
divs.forEach((div) => {
  div.addEventListener("mouseover", drow);
  div.addEventListener("mousedown", drow);
});

function clearBoard() {
  const divs = document.querySelectorAll(".squre-div");
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}
