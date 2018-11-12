// // Register a new User

let signupuser = document.getElementById('signupbox')
if (signupuser){
    signupuser.addEventListener('submit', signup);
    
function signup(e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
    let signupUrl = 'https://store-management-app.herokuapp.com/api/v2/signup';
    let token = localStorage.getItem('token')

    
    fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json',
            "Authorization": "Bearer "+token
        },
        body:JSON.stringify({email:email,password:password,})
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.message === `user with ${email} already exists`){
                document.getElementById("mymessage").innerHTML = data.message
                document.getElementById("mymessage").style.color = 'red';
            }
            if (data.message === `user ${email} created successfully`){
                document.getElementById("mymessage").innerHTML = data.message
                document.getElementById("mymessage").style.color = 'green';
                window.location.assign("../admin/login.html");
            }
        })
    }
  }