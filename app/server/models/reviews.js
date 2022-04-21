const reviews = [
    {
    id: 1,
    stars: 2,
    cafeid: 1,
    authorId: 1
    },
    {
    id: 2,
    stars: 5,
    cafeid: 2,
    authorId: 2
    },
    {
    id: 3,
    stars: 1,
    cafeid: 3,
    authorId: 2
    },
    {
    id: 4,
    stars: 4,
    cafeid: 5,
    authorId: 2
    },
    {
    id: 5,
    stars: 1,
    cafeid: 4,
    authorId: 2
    }
    ];
    let getReviews = () => reviews;
    module.exports = { getReviews };