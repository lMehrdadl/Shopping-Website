import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie(document.cookie);
  const URL = location.href;
  if (
    (cookie && URL.includes("auth")) ||
    (!cookie && URL.includes("dashboard"))
  ) {
    location.assign("index.html");
    return false;
  }
};
export { authHandler };
