const loginEl = document.querySelector(".login-form");

loginEl.addEventListener("submit", handleSubmit);

const loginForm = {};

function handleSubmit(e) {
  const userEmail = e.currentTarget.elements.email;
  const userPassword = e.currentTarget.elements.password;

  if (userEmail.value === "" || userPassword.value === "") {
    alert("All fields must be filled!");
    e.preventDefault();
  } else {
    loginForm.userEmail = userEmail.value;
    loginForm.userPassword = userPassword.value;
    alert("Login successful!");
    e.currentTarget.reset();
  }
  console.log(loginForm);
}
