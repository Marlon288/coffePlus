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



function register(user) {
    const u = userExists(user.username);
    if(u.length>0) throw Error('Email already in use')

    const newUser = {
        userId: users[users.length-1].userId + 1,
        name: user.name,
        userName: user.username,
        password: user.password,
    }
    users.push(newUser);
    return newUser;
}

function deleteUser(userId) {
    let i = users.map((user) => user.userId).indexOf(userId);
    users.splice(i, 1);
}


function editUser(user) {
    const u = userExists(user.userName);
    if(u.length > 0) throw ('Email already in use')

    const cUser = users.filter((u) => u.userId === user.userId);
    cUser[0].name = user.name;
    cUser[0].password = user.password;
    return cUser[0];
}
module.exports = { getUsers, login, register, deleteUser, editUser };