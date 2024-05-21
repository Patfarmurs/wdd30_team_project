const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

async function convertToJson(res) {
  const responseBody = await res.json();
  
  if (res.ok) {
    return responseBody;
  } else {
    throw new Error(JSON.stringify(responseBody));
  }
}


export default class ExternalServices {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async checkout(json) {
    const response = await fetch(baseURL + "orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });
    return response;
  }
}
