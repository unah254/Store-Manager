let addRecord = document.getElementById('add')
if (addRecord){
    addRecord.addEventListener('submit', create);

}    
function create(e){
    e.preventDefault();
    let product_id = document.getElementById('product_id').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let creator = document.getElementById('category').value;
    let token = window.localStorage.getItem("token");

    if (!token){
        window.location ='http://127.0.0.1:5500/UI/admin/login.html'
    }


    let recordUrl = 'https://store-management-app.herokuapp.com/api/v2/product';
    
    fetch(recordUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            Authorization: `Bearer ${token}`,
            'Content-type':'application/json'
        },
        body:JSON.stringify({id:product_id,price:price,quantity_to_sell:quantity,creator_name:creator})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
           
    
            if (data.message==="product does not exist"){
                // if request is unsuccessful
                document.getElementById('mymessage').style.color = 'red'
                document.getElementById('mymessage').innerHTML = data.message
            }
            
            if (data.message === "record successfuly created"){
                // if request is successful
                document.getElementById('mymessage').style.color = 'green'
                document.getElementById('mymessage').innerHTML = data.message
                setTimeout(()=>{
                    location.reload();
                 }, 2000);
                }
        })}