// // Login a User
// const token_decoder = require('jwt-decode');

let signin = document.getElementById('loginbox')
if (signin){
    signin.addEventListener('submit', login);

}    
function login(e){
    e.preventDefault();
    let user_email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
    let loginUrl = 'https://store-management-app.herokuapp.com/api/v2/login';
    
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
                window.location.href = "admin.html";
            }
            window.localStorage.setItem('token', data.token);
        })
                // let isAdmin = token_decoder(token).identity.admin;

                // if(isAdmin){
                //     window.location.assign("../../admin/productcategory.html");
                // }
                // else{
                //     window.location.assign("../UI/attendant/cart.html");
                }
            
        