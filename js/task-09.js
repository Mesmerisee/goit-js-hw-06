const widgetEl = document.querySelector(".widget");
const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", () => {
  let color = getRandomHexColor();
  document.body.style.backgroungColor = color;
  textEl.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
