document.getElementById("submitSignUp").addEventListener("click", addNewUser, false);



function addNewUser(){
    let fNameValue = document.getElementById("fName").value;
    let lNameValue = document.getElementById("lName").value;
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;  
    if(fNameValue != "" && lNameValue != "" && emailValue != "" && passwordValue != ""){
        let user = new User(0,fNameValue, lNameValue, emailValue, passwordValue);
        console.log(user.toString());
    }
    
}