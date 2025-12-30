import { authHandler } from "../Utils/authorization.js";

const init = () => {
  authHandler();
};

document.addEventListener("DOMContentLoaded", init);
