const loginEl = document.querySelector(".login-form");

loginEl.addEventListener("submit", handleSubmit);

const loginForm = {};

function handleSubmit(e) {
    e.preventDefault();
  const userEmail = e.currentTarget.elements.email;
  const userPassword = e.currentTarget.elements.password;

  if (userEmail.value === "" || userPassword.value === "") {
    alert("All fields must be filled!");
   
  } else {
    loginForm.userEmail = userEmail.value;
    loginForm.userPassword = userPassword.value;
    alert("Login successful!");
    console.log(loginForm);
    e.currentTarget.reset();
  }
  
}
