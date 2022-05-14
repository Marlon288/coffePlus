const con = require("./db_connect");

let getCafes = async () => {
    const sql = `SELECT * FROM cafes`;
    return await con.query(sql);
};

async function getCategoriesForCafe(cafe) {
    let sql;
    if(cafe.id) {
        sql = `SELECT * FROM categoriesandcafes
        inner join categories on categories.ID=categoriesandcafes.CategoryID
        WHERE CafeID = ${cafe.id}  
        `;
    } 
    return await con.query(sql);
}

async function getCafesForCategoryAndLocation(elem){
    let sql;
    let cat = elem.categories;
    let stringCat = "";
    if(cat.length > 0) stringCat = "AND (";

    for(let i =0;i<cat.length;i++){
        if(i != cat.length-1) stringCat += `categoriesandcafes.CategoryID = ${cat[i]} OR `;
        else stringCat += `categoriesandcafes.CategoryID = ${cat[i]})`;
    }
    if(elem.Lng) {
        sql = `SELECT *
                FROM (
                    SELECT Distinct *, COUNT(categoriesandcafes.CategoryID) as counted
                    FROM coffeeplus_db.cafes 
                    INNER JOIN categoriesandcafes on cafes.ID = categoriesandcafes.CafeID
                    WHERE (ABS(cafes.Lat - ${elem.Lat}) < 0.1 AND ABS(cafes.Lng - ${elem.Lng}) < 0.1)
                    ${stringCat}
                    GROUP BY ID
                    ) as x
                WHERE counted >= ${cat.length} 
        `;
    } 
    return await con.query(sql);
}



    module.exports = { getCafes, getCategoriesForCafe, getCafesForCategoryAndLocation };
