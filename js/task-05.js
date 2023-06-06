const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

//inputEl.addEventListener("input", (el) => {
//spanEl.textContent = el.target.value;
//})
inputEl.addEventListener("input", (el) => {
spanEl.textContent = el.currentTarget.value === "" ? "Anonymous" : el.currentTarget.value;
});
