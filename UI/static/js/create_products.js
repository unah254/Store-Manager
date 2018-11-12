let addProduct = document.getElementById('add')
if (addProduct){
    addProduct.addEventListener('submit', create);

}    
function create(e){
    e.preventDefault();
    let product_name = document.getElementById('product_name').value;
    let price = document.getElementById('product_price').value;
    let quantity = document.getElementById('quantity_price').value;
    let category = document.getElementById('category').value;
    let token = window.localStorage.getItem("token");

    if (!token){
        window.location ='http://127.0.0.1:5500/UI/admin/login.html'
    }

    let productUrl = 'https://store-management-app.herokuapp.com/api/v2/product';
    
    fetch(productUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            Authorization: `Bearer ${token}`,
            'Content-type':'application/json'
        },
        body:JSON.stringify({name:product_name,price:price,quantity:quantity,category:category})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
           
    
            if (data.message==="product already exists, please update product"){
                // if request is unsuccessful
                document.getElementById('mymessage').style.color = 'red'
                document.getElementById('mymessage').innerHTML = data.message
            }
            
            if (data.message === "product successfuly created"){
                // if request is successful
                document.getElementById('mymessage').style.color = 'green'
                document.getElementById('mymessage').innerHTML = data.message
                setTimeout(()=>{
                    location.reload();
                 }, 2000);
                }
        })}