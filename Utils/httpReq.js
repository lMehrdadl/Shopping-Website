const BASE_URL = "https://fakestoreapi.com/";

const sendLoginInfo = async (path, username, password) => {
  try {
    const credentials = {
      username: username.toString(),
      password: password.toString(),
    };
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    alert("Something has happened!");
  }
};

const getData = async (path) => {
  try {
    const products = await fetch(`${BASE_URL}${path}`);
    const productsJson = await products.json();
    return productsJson;
  } catch (error) {
      alert("An Error Occured")
  }
};

export { sendLoginInfo , getData};
