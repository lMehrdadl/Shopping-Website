import { getCookie } from "../Utils/cookie.js";
import { getData } from "../Utils/httpReq.js";
import { shortenText } from "../Utils/functions.js";

const dashboardButton = document.getElementById("dashboard");
const loginButton = document.getElementById("login");
const products = document.getElementById("products");
const searchInput = document.getElementById("product-search");
const searchButton = document.getElementById("search-button");
const filterButton = document.querySelector("main").querySelectorAll("p");
const allButton = document.getElementById("allButton");

let allProducts = null;

const showProducts = async (productList) => {
  products.innerHTML = "";
  productList.forEach((product) => {
    const { image, price, rating, title } = product;
    const productJSX = `
      <div class="product">
        <div id="rating">
          <div class = "rate">
            <p>${rating.count}</p>
            <i class="fa-solid fa-user"></i>
          </div>
          <div class = "rate">
            <p>${rating.rate}</p>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div><img src=${image} alt="productIMG"></div>
        <h4 id="product-title">${shortenText(title)}</h4>
        <div id = "info">
          <p>$ ${price}</p>
          <button id="buy">
            <p>Buy</p>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    `;
    products.innerHTML += productJSX;
  });
};

const init = async () => {
  const cookie = getCookie(document.cookie);
  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
  allProducts = await getData("products");
  showProducts(allProducts);
};

const searchHandler = () => {
  const searchProduct = searchInput.value.trim().toLowerCase();
  products.innerHTML = `<span></span>`;
  if (!searchProduct) showProducts(allProducts);
  const filterdProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchProduct)
  );
  showProducts(filterdProducts);
};

const filterHandler = (event) => {
  const filterName = event.target.innerText.toLowerCase();
  filterButton.forEach((button) => {
    if (button.innerText.toLowerCase() === filterName) {
      button.className = "selected";
    } else {
      button.className = "";
    }
  });
  if (filterName === "all") {
    showProducts(allProducts);
  } else {
    const filteredProducts = allProducts.filter(
      (product) => product.category.toLowerCase() === filterName
    );
    showProducts(filteredProducts);
  }
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
filterButton.forEach((button) =>
  button.addEventListener("click", filterHandler)
);
