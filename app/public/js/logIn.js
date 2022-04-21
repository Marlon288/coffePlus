

function login(e){
    e.preventDefault();
    const emailValue = document.getElementById("login").value;
    const passwordValue = document.getElementById("password").value;

    fetchData('/users/login', {username: emailValue, password: passwordValue}, "POST")
    .then((data) => {
        if(!data.message) {
          //setCurrentUser(data);
          window.location.href = "bmi.html";
        }
      })
      .catch((error) => {
        const errText = error.message;
      //  document.querySelector("#login-form p.error").innerHTML = errText;
        //document.getElementById("pswd").value = "";
        console.log(`Error! ${errText}`)
      });
}

async function fetchData(url = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${url}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }

  
document.getElementById("submitLogIn").addEventListener("click", login);
