const users = [
    {
    userId: 12345,
    name: "Thomas Mueller",
    username: "t@gmail.com",
    password: "thomas"
    },
    {
    userId: 55555,
    name: "Manuel Neuer",
    username: "manuel@gmail.com",
    password: "manuel"
    }
    ];
let getUsers = () => users;

function login(email, password){
    const user = userExists(username);
    if(!user[0]) throw Error("User not found");
    if(user[0].password !== password) throw Error("Password is incorrect");
    return user[0];
}
function userExists(username) {
    return users.filter((u) => u.username === username);
  }

module.exports = { getUsers, login};