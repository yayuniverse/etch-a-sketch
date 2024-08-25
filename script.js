const container = document.querySelector(".container");
const containerWidth = parseInt(getComputedStyle(container).width, 10);
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const toggleColorMode = document.querySelector("#toggleColorMode");
const toggleShadeMode = document.querySelector("#toggleShadeMode");

createSquare(64);

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createSquare(number) {
  removeAllChildren(container);
  for (let i = 1; i <= number * number; i++) {
    const square = document.createElement("div");
    square.style.width = `${containerWidth / number}px`;
    square.className = "square";
    container.appendChild(square);
  }
  return "Done!";
}

function randomColor() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
}

container.addEventListener("mouseover", function (event) {
  if (event.target.matches(".square") && toggleColorMode.checked) {
    event.target.style.backgroundColor = randomColor();
    event.target.style.borderColor = event.target.style.backgroundColor;
  } else if (event.target.matches(".square") && !toggleColorMode.checked) {
    event.target.style.backgroundColor = "white";
    event.target.style.borderColor = "white";
  }
});

button.addEventListener("click", () => {
  createSquare(input.value);
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting
  createSquare(input.value);
});

