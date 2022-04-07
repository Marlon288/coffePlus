document.getElementById("submitLogIn").addEventListener("click", checkLogIn, false);

function checkLogIn(){
    let emailValue = document.getElementById("login").value;
    let passwordValue = document.getElementById("password").value;
    if(emailValue != "" && passwordValue != ""){
        let user = new User(0, "", "", emailValue, passwordValue);
        console.log(user.toString());
    }

}