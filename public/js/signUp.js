import { fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } from './main.js'

const signUp = document.getElementById("signup-form");
if(signUp) signUp.addEventListener('submit', register);



function register(e) {
    e.preventDefault();
  
    const username = document.getElementById("email").value;
    const pswd = document.getElementById("password").value;
    const fname = document.getElementById("fName").value;
    const lname = document.getElementById("lName").value;
  
    fetchData('/users/register', {username: username, password: pswd, First_Name: fname, Last_Name: lname}, "POST")
    .then((data) => {
      if(!data.message) {
        setCurrentUser(data);
        window.location.href = "cafes.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#signup-form p.error").innerHTML = errText;
      document.getElementById("password").value = "";
      console.log(`Error! ${errText}`)
    });
  }