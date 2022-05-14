const con = require("./db_connect");

let getCategories = async () => {
    const sql = `SELECT * FROM categories`;
    return await con.query(sql);
};

async function getCategory(cat) {
    let sql;
    if(cat.id) {
      sql = `SELECT * FROM categories
        WHERE id = ${cat.id}
      `;
    } 
    return await con.query(sql);
}

async function getCafesForCategory(cat) {
    let sql;
    if(cat.id) {
      sql = `SELECT * FROM categoriesandcafes
        WHERE CategoryID = ${cat.id}  
      `;
    } 
    return await con.query(sql);
}
async function addCategory(cat) {
  const u = await categoryExists(cat.Name);
  if(u.length>0) throw Error("Username already exists");

  const sql = `INSERT INTO categories (Name, Definition)
    VALUES ("${cat.name}", "${cat.Definition}")
  `;

  const insert = await con.query(sql);
}

async function categoryExists(name) {
  const sql = `SELECT * FROM categories
    WHERE Name = "${name}"
  `;
  return await con.query(sql);
}




module.exports = { getCategories, getCategory, getCafesForCategory, addCategory};