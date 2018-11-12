function items(){
    let token = window.localStorage.getItem('token');
    console.log(token)
    let productsUrl = 'https://store-management-app.herokuapp.com/api/v2/products';
    
	fetch(productsUrl, {
		method: "GET",
		headers: { 'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    "Authorization": "Bearer "+token
			   }
	})
	.then((response) => response.json())
	.then(function (data) {
		
		let productItems = document.getElementById("items");
		
        console.log(data);
        console.log(data['Product items'])
        let products = data['Product items'];
        console.log(products.length)
		products.forEach(product => {
			productItems.innerHTML += ` <h3>${product.name}</h3>
            <p>quantity ${product.quantity}</p>
            <b>KES. ${product.price}</b><br><br>
            <button class="call_to" onclick="location.href='order.html';">Add to Cart</button>`
		})
	})
}
items()

// // // get all available products
// let div = document.getElementById('items')
// let productsUrl = 'https://storemanager-v2.herokuapp.com/api/v2/products';
// let token = window.localStorage.getItem('token');

// window.onload = function items(){
//     fetch(productsUrl,{
//         method: "GET",
//         headers : {
//             "Content-Type": "application/json",
//             'Authorization': 'Bearer '+ token
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.message === 'No records available'){
//                     // if request is unsuccessful
//                     document.getElementById('mymessage').style.color = 'red'
//                     document.getElementById('mymessage').innerHTML = data.message
//                     return message
//                 }
//                 // if request is successful
//         let products = data.products; // Get the results
//         return products.map(function(product) { // Map through the results and for each run the code below
//         div.innerHTML += `
//                 <h3>${product.name}</h3>
//                 <p>Suitable for podcast</p>
//                 <b>${product.price}</b><br><br>
//                 <button class="call_to" onclick="location.href='';">Add to Cart</button>
//                 `;
//         })
        
//     }

// }).catch((error) => {
//     console.log(error);
//   });
        


