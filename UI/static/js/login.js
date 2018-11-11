// // Login a User
const token_decoder = require('jwt-decode');

let signin = document.getElementById('loginbox')
if (signin){
    signin.addEventListener
    ('submit', login);

    
function login(e){
    e.preventDefault();
    let user_email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
    let loginUrl = 'http://127.0.0.1:5000/api/v2/login';
    
    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({email:user_email,password:password,})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            // get token
            let token = data.token;
           
            if (data.message=="enter valid email"){
                // if request is unsuccessful
                document.getElementById('mymessage').style.color = 'red'
                document.getElementById('mymessage').innerHTML = data.message
            }
            if (data.message=="user not found"){
                // if request is unsuccessful
                document.getElementById('mymessage').style.color = 'red'
                document.getElementById('mymessage').innerHTML = data.message
            }
            
            if (data.message === "successfully logged"){
                // if request is successful
                document.getElementById('mymessage').style.color = 'green'
                document.getElementById('mymessage').innerHTML = data.message
                let role = decoded(token).identity.admin;

                if(role){
                    window.location.href("../../admin/productcategory.html");
                }
                else{
                    window.location.href("../../attendant/cart.html");
        })
    }
  }