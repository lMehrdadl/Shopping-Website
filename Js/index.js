import { getCookie } from "../Utils/cookie.js";
import { getData } from "../Utils/httpReq.js";

const dashboardButton = document.getElementById("dashboard");
const loginButton = document.getElementById("login");

const showProducts = async (productList) => {};

const init = async () => {
  const cookie = getCookie(document.cookie);
  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
  const allProducts = await getData("products");
  console.log(allProducts);
  showProducts(allProducts);
};

document.addEventListener("DOMContentLoaded", init);
