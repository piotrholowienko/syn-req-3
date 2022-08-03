let productArray = [];

const getProductListFromLS = () => {
  return JSON.parse(localStorage.getItem("productArray"));
};
productArray = getProductListFromLS();

const addProductData = (product) => {
  productArray.push(product);
  localStorage.setItem("productArray", JSON.stringify(productArray));
};

const productName = document.querySelector("h1.a-typo.is-primary").innerText;
const productIMG = document.querySelector(
  "img.is-modal.is-pagination.is-loaded"
).src;
const productURL = location.href;
const productPrice = document.querySelector("span.a-price_price").innerText;

const product = {
  productName,
  productIMG,
  productURL,
  productPrice,
};

addProductData(product);
