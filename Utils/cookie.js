const setCookie = (data) => {
  document.cookie = `Token = ${data}; max-age = ${24 * 60 * 60}; path=/`;
};

const getCookie = (data) => {
  if (data) {
    const cookieArray = data.split("=");
    return {
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
};

export { setCookie, getCookie };
