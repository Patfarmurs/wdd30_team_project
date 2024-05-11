import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

// Create an instance of ProductListing & product data
const dataSource = new ProductData("tents");
const productListing = new ProductListing("Tents", dataSource, element);
const element = document.querySelector(".product-list");

productListing.init();
