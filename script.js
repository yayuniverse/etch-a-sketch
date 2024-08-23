const container = document.querySelector(".container");
const containerWidth = parseInt(getComputedStyle(container).width, 10);

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

createSquare(64);
