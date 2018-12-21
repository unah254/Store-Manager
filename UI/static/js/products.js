function items() {
  let token = window.localStorage.getItem("token");

  let isAdmin= window.localStorage.getItem("isAdmin");
  if (!token) {
    window.location = "http://127.0.0.1:5500/UI/admin/login.html";
  }

  let productsUrl =
    "https://store-management-app.herokuapp.com/api/v2/products";

  fetch(productsUrl, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
      Authorization: "Bearer " + token
    }
  })
    .then(response => response.json())
    .then(function(data) {
      let productItems = document.getElementById("productTable");

      console.log(data);
      console.log(data["Product items"]);
      let products = data["Product items"];

      if (data.message === "There are no productitems for now ") {
        // if request is unsuccessful
        document.getElementById("mymessage").style.color = "red";
        document.getElementById("mymessage").innerHTML = data.message;
      }
      if (data.message === "success") {
        // if request is successful
        document.getElementById("mymessage").style.color = "green";
        document.getElementById("mymessage").innerHTML = data.message;
      }
      products.forEach(product => {
        productItems.innerHTML += ` <tr>
                
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.quantity}</td>

            <td class=${ !isAdmin ? "hide" : ""}>
                <button id="accept" onclick="location.href='';">Edit</button>
                <a href="productcategory.html?id=${
                  product.id
                }" id="decline">Delete</a>
            </td>
        </tr> `;
      });
    });
}
items();
