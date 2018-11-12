const logoutUrl = "https://store-management-app.herokuapp.com/api/v2/logout"

let token = localStorage.getItem('token')
if (!token){
    window.location ='http://127.0.0.1:5500/UI/admin/login.html'
}




    function logout(){
    
fetch(logoutUrl, {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json',
        'Authorization':'Bearer ' +token
    }})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    localStorage.removeItem('token')
    window.location ='http://127.0.0.1:5500/UI/admin/login.html'

}
logout()