import { sendLoginInfo } from "../Utils/httpReq.js";
import { setCookie } from "../Utils/cookie.js";
import { authHandler } from "../Utils/authorization.js";
import { validateForm } from "../Utils/validation.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector(".login-button");

const loginHandler = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;
  const validation = validateForm(username, password);
  if (!validation) return;
  const response = await sendLoginInfo("auth/login", username, password);
  setCookie(response.token);
  location.assign("index.html");
};

loginButton.addEventListener("click", loginHandler);
document.addEventListener("DOMContentLoaded", authHandler);
