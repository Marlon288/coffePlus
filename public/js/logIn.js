import { fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } from './main.js'

const loginForm = document.getElementById("form-login");
if(loginForm) loginForm.addEventListener('submit', login);


function login(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const pswd = document.getElementById("password").value;
    fetchData('/users/login', {username: username, password: pswd}, "POST")
    .then((data) => { 
      if(!data.message) {
        setCurrentUser(data);
        window.location.href = "cafes.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#form-login p.error").innerHTML = errText;
      document.getElementById("password").value = "";
      console.log(`Error! ${errText}`)
    });
  }