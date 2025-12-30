const usernameMessege = document.getElementById("username-messege");
const passwordMessege = document.getElementById("password-messege");
const inputs = document.querySelectorAll("input");
const loginButton = document.querySelector(".login-button");

const showMessage = (type, text) => {
  if (type === "username") {
    usernameMessege.innerText = text;
    inputs.forEach((input) => {
      input.classList.remove("input");
      input.classList.add("input-new");
    });
    setInterval(() => {
      usernameMessege.innerText = "";
      inputs.forEach((input) => {
        input.classList.remove("input-new");
        input.classList.add("input");
      });
    }, 2000);
  } else if (type === "password") {
    passwordMessege.innerText = text;
    loginButton.classList.remove("login-button");
    loginButton.classList.add("login-button-new");
    setInterval(() => {
      passwordMessege.innerText = "";
      loginButton.classList.remove("login-button-new");
      loginButton.classList.add("login-button");
    }, 2000);
  }
};

export { showMessage };
