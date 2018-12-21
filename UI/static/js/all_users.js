function users() {
  let token = window.localStorage.getItem("token");
  if (!token) {
    window.location = "http://127.0.0.1:5500/UI/admin/login.html";
  }

  let usersUrl = "https://store-management-app.herokuapp.com/api/v2/users";

  fetch(usersUrl, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
      Authorization: "Bearer " + token
    }
  })
    .then(response => response.json())
    .then(function(data) {
      let userViews = document.getElementById("users1");

      console.log(data);
      console.log(data["Available users"]);
      let users = data["Available users"];

      if (data.message === "There are currently no users ") {
        // if request is unsuccessful
        document.getElementById("mymessage").style.color = "red";
        document.getElementById("mymessage").innerHTML = data.message;
      }
      if (data.message === "success") {
        // if request is successful
        document.getElementById("mymessage").style.color = "green";
        document.getElementById("mymessage").innerHTML = data.message;
      }
      users.forEach(user => {
        userViews.innerHTML += ` <<tr>
                
            <td>${user.email}</td>
            

            <td>
                <button id="accept" onclick="location.href='';">Edit rights</button>
                
            </td>
        </tr> `
      });
    });
}
users();
