import ProductData from "./ProductData.mjs";

import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

// Create an instance of ProductListing & product data
const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");


