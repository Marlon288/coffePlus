const con = require("./db_connect");


let getUsers = async () => {
    const sql = `SELECT * FROM users`;
    return await con.query(sql);
  };
  

async function getUser(user) {
    let sql;
    if(user.id) {
      sql = `SELECT * FROM users
        WHERE id = ${user.id}
      `;
    } else {
      sql = `SELECT * FROM users
        WHERE username = "${user.username}"
      `;
    }

    return await con.query(sql);
}

async function login(username, password) {
    const user = await userExists(username);
    if(!user[0]) throw Error('User not found')
    if(user[0].password !== password) throw Error("Password is incorrect");
  
    return user[0];
  }
  
async function register(user) {
    const u = userExists(user.username);
    if(u.length>0) throw Error("Username already exists");
  
    const sql = `INSERT INTO users (username, password, First_Name, Last_Name)
      VALUES ("${user.username}", "${user.password}", "${user.First_Name}", "${user.Last_Name}")
    `;
  
    const insert = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}
  
async function deleteUser(userId) {
    const sql = `DELETE FROM users 
      WHERE id = ${userId}
    `;
    await con.query(sql);
   
}
  
async function userExists(username) {
    const sql = `SELECT * FROM users
      WHERE username = "${username}"
    `;
    return await con.query(sql);
}
  
async function editUser(user) {
    const sql = `UPDATE users SET
      username = "${user.userName}"
      WHERE id = ${user.id}
    `;
    const update = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}

module.exports = { getUsers, login, register, deleteUser, editUser, getUser };