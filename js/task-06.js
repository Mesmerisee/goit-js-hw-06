const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", function() {
   const inputValue = inputEl.value.length;
   const totalValues = parseInt(inputEl.getAttribute('data-length'));
   if (inputValue === totalValues) {
    inputEl.classList.add("valid");}
    else {inputEl.classList.add("invalid");}
})