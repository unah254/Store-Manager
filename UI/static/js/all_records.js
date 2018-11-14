function allRecords(){
    let token = window.localStorage.getItem('token');
    if (!token){
        window.location ='http://127.0.0.1:5500/UI/admin/login.html'
    }


    let productsUrl = 'https://store-management-app.herokuapp.com/api/v2/sales';
    
	fetch(productsUrl, {
		method: "GET",
		headers: { 'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    "Authorization": "Bearer "+token
			   }
	})
	.then((response) => response.json())
	.then(function (data) {
		
		let saleRecords= document.getElementById("records");
		
        console.log(data);
        console.log(data['Sale Records'])
        let records = data['Sale Records'];
        
        if (data.message === "No records available "){
                                // if request is unsuccessful
                                document.getElementById('mymessage').style.color = 'red'
                                document.getElementById('mymessage').innerHTML = data.message
                               
                            }
                            if (data.message === "Success"){
                                // if request is successful
                                document.getElementById('mymessage').style.color = 'green'
                                document.getElementById('mymessage').innerHTML = data.message
                               
                            }
		records.forEach(record => {
			productItems.innerHTML += ` <tr>
            <td>${record.creator_name}</td>
            <td>${record.product_id}</td>
            <td>${record.price}</td>
            <td>${record.quantity_to_sell}</td>
            <td>${record.date}</td>
            


        </tr>`
		})
	})
}
allRecords()



