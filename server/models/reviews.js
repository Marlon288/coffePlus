const con = require("./db_connect");


let getReviews = async () => {
    const sql = `SELECT * FROM reviews`;
    return await con.query(sql);
};

async function getReviewsForCafe(cafe) {
    let sql;
    if(cafe.CafeID) {
        sql = `SELECT * FROM reviews
        WHERE CafeID = ${cafe.CafeID}  
        `;
    } 
    return await con.query(sql);
}

async function getStarsForCafes(cafe){
    let sql;
    if(cafe.CafeID) {
        sql = `SELECT CafeID, AVG(stars) as total FROM reviews
        WHERE CafeID = ${cafe.CafeID}
        GROUP BY CafeID 
        `;
    } 
    return await con.query(sql);
}

async function getReview(body){
    let sql;
    if(body.UserID) {
        sql = `SELECT * FROM reviews
        WHERE CafeID = ${body.CafeID}
        AND UserID = ${body.UserID}
        GROUP BY CafeID 
        `;
    } 
    return await con.query(sql);
}

async function editReview(review){
    const sql = `UPDATE reviews SET
    stars = "${review.stars}"
    WHERE UserID = ${review.UserID}
    AND  CafeID = ${review.CafeID}
    `;
    return await con.query(sql);
}

async function newReview(review){
    const sql = `INSERT INTO reviews (UserID, stars, CafeID)
      VALUES ("${review.UserID}", "${review.stars}", "${review.CafeID}")
    `;
    return await con.query(sql);
}











module.exports = { getReviews, editReview, getReview, getStarsForCafes, getReviewsForCafe, newReview};