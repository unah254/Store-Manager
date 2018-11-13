if (window.location.href.includes("productcategory.html?id=")) {
    deleteProduct();
  }
function deleteProduct(){
    let token = window.localStorage.getItem('token');
    if (!token){
        window.location ='http://127.0.0.1:5500/UI/admin/login.html'
    }

    const productIdParam = new URLSearchParams(window.location.search).get(
        "id"
      );
    
    
    let deleteUrl = 'https://store-management-app.herokuapp.com/api/v2/products/'+ productIdParam;
    
	fetch(deleteUrl, {
		method: "DELETE",
		headers: { 'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    "Authorization": "Bearer "+token
			   }
	})
	.then((response) => response.json())
    .then(function (data) {
        window.location ='http://127.0.0.1:5500/UI/admin/productcategory.html'
    })
    
}