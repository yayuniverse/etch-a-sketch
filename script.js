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

container.addEventListener("mouseover", function (event) {
    if (event.target.matches(".square")) {
      //   console.log(typeof(event.target.style.opacity))
      event.target.style.backgroundColor = "white";
      event.target.style.borderColor = "white";
    }
  });


createSquare(64);
