// // import axios from "axios";
// // import { ApiResponse } from ".//apiResponses";
function getProducts() {
  //   let status = new ApiResponse();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    type: "Template",
    brand_name: "Brand Name",
    model_number: "Model Number",
    price: "Price",
    link_url: "Website Url",
    image_url: "Image Url",
  });

  var requestOptions = {
    method: "POST",
    // headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://leaf-it-node-red-1.mybluemix.net/product-list", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// function myFunction() {
//   console.log("Hello world");
// }
