const counterValue = document.querySelector("#value");
const minusBtn = document.querySelector("button[data-action='decrement']");
const plusBtn = document.querySelector("button[data-action='increment']");

let value = 0;
minusBtn.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
  if (value < 0) {
    counterValue.style.color = "red";
  }
});
plusBtn.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
  if (value >= 0) {
    counterValue.style.color = "green";
  }
});
