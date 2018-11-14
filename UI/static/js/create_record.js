let addRecord = document.getElementById('add')
if (addRecord){
    addRecord.addEventListener('submit', create);

}    
function create(e){
    e.preventDefault();
    let product_id =parseInt(document.getElementById('product_id').value);
    let price =parseInt(document.getElementById('price').value);
    let quantity_to_sell =parseInt(document.getElementById('quantity').value);
    let token = window.localStorage.getItem("token");
    

    if (!token){
        window.location ='http://127.0.0.1:5500/UI/admin/login.html'
    }


    let recordUrl = 'https://store-management-app.herokuapp.com/api/v2/sales';
    
    fetch(recordUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json',
                    "Authorization": "Bearer "+token
        },
        body:JSON.stringify({product_id,price,quantity_to_sell})
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