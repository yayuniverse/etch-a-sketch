const container = document.querySelector(".container");
const containerWidth = parseInt(getComputedStyle(container).width, 10);
const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const toggleColorMode = document.querySelector("#toggleColorMode");
const toggleShadeMode = document.querySelector("#toggleShadeMode");

createSquare(48);

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
    // Initialize the data-opacity attribute
    square.dataset.opacity = "0";
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

function updateToggleStates(changedToggle) {
  if (changedToggle === "colorMode" && toggleShadeMode.checked) {
    toggleShadeMode.checked = false;
  } else if (changedToggle === "shadeMode" && toggleColorMode.checked) {
    toggleColorMode.checked = false;
  }
}

container.addEventListener("mouseover", function (event) {
  if (event.target.matches(".square")) {
    if (toggleShadeMode.checked) {
      let opacityCount = parseFloat(event.target.dataset.opacity);
      opacityCount = Math.min(opacityCount + 0.1, 1);
      event.target.style.backgroundColor = `rgba(255, 255, 255, ${opacityCount})`;
      event.target.dataset.opacity = opacityCount.toString();
    } else if (toggleColorMode.checked) {
      event.target.style.backgroundColor = randomColor();
      event.target.style.borderColor = event.target.style.backgroundColor;
    } else {
      event.target.style.backgroundColor = "white";
      event.target.style.borderColor = "white";
      event.target.dataset.opacity = "0";
    }
  }
});

button.addEventListener("click", () => {
  createSquare(input.value);
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting
  createSquare(input.value);
});

toggleShadeMode.addEventListener("change", function () {
  updateToggleStates("shadeMode");
});

toggleColorMode.addEventListener("change", function () {
  updateToggleStates("colorMode");
});