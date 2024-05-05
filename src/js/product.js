import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // Get current cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Check if product already exists in cart
  const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    // If product already exists, update its quantity
    cartItems[existingProductIndex].quantity++;
  } else {
    // If product doesn't exist, add it to cart
    product.quantity = 1;
    cartItems.push(product);
  }

  // Update local storage with new cart items
  setLocalStorage("so-cart", cartItems);
}

async function addToCartHandler(e) {
  try {
    const productId = e.target.dataset.id;
    const product = await dataSource.findProductById(productId);

    if (!product) {
      console.error(`Product with id ${productId} not found.`);
      return;
    }

    addProductToCart(product);
    console.log("Product added to cart:", product);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}

document.querySelectorAll("addToCart").forEach(button => {
  button.addEventListener("click", addToCartHandler);
});
