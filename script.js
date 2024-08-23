const container = document.querySelector(".container");
const containerWidth = parseInt(getComputedStyle(container).width, 10);

function createSquare(number) {
  for (let i = 1; i <= number * number; i++) {
    const square = document.createElement("div");
    square.style.width = `${containerWidth / number}px`;
    square.className = "square";
    container.appendChild(square);
  }
}

createSquare(64);


