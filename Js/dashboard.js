import { authHandler } from "../Utils/authorization.js";
import { getData } from "../Utils/httpReq.js";

const usersContainer = document.getElementById("users");
const logoutButton = document.getElementById("logout");

const renderUsers = (users) => {
  usersContainer.innerHTML = "";
  users.forEach((user) => {
    const userJSX = `
    <div class = "user">
      <h2>${user.id}</h2>
      <div class = "userInfo">
        <div class = "detail">
          <div class = "title">
            <i class="fa-solid fa-user"></i>
            <p>Name:</p>
          </div>
          <p>${user.name.firstname} ${user.name.lastname}</p>
        </div>
        <div class = "detail">
          <div class = "title">
            <i class="fa-solid fa-paperclip"></i>
            <p>Username:</p>
          </div>
          <p>${user.username}</p>
        </div>
        <div class = "detail">
          <div class = "title">
            <i class="fa-solid fa-envelope"></i>
            <p>Email:</p>
          </div>
          <p>${user.email}</p>
        </div>
        <div class = "detail">
          <div class = "title">
            <i class="fa-solid fa-phone"></i>
            <p>Phone:</p>
          </div>
          <p>${user.phone}</p>
        </div>
        <div class = "detail">
          <div class = "title">
            <i class="fa-solid fa-location-dot"></i>
            <p>Address:</p>
          </div>
          <p>${user.address.city} - ${user.address.street} - ${user.address.zipcode}</p>
        </div>
      </div>
    </div>
  
  `;
    usersContainer.innerHTML += userJSX;
  });
};

const init = async () => {
  authHandler();
  const users = await getData("users");
  renderUsers(users);
};

const logoutHandler = () => {
  document.cookie = "Token=; max-age=0; path=/" 
  location.assign("index.html");
};

document.addEventListener("DOMContentLoaded", init);
logoutButton.addEventListener("click", logoutHandler);
