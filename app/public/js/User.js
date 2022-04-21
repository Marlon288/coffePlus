class User {
    

    constructor(userID, fName, lName, email, pwd){
        this.userID = userID;
        this.lName = lName;
        this.fName = fName;
        this.email = email;
        this.pwd = pwd;
    }

    getUserId(){
        return this.userID;
    }
    getFName(){
        return this.fName;
    }
    getLName(){
        return this.lName;
    }
    getEmail(){
        return this.email;
    }
    getPwd(){
        return this.pwd;
    }
    setUserID(userID){
        this.userID = userID
    }
    setFName(fName){
        this.fName = fName;
    }
    setLName(lName){
        this.lName = lName;
    }
    setEmail(email){
        this.email = email;
    }
    setPwd(pwd){
        this.pwd = pwd;
    }

    toString(){
        return "First: " + this.fName + " | Last: " + this.lName + " | ID: " + this.userID + " | email: " + this.email; 
    }

}