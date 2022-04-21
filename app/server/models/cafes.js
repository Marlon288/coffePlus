const cafes = [
    {
    "id": 0, 
    "name": "Cafe Sur", 
    latlng: {
        lat: 50.882, 
        lng: 6.921301
    }, 
    "categories": [0,1,2], 
    stars: 5},
    {"id": 1, "name": "Cafe del Norte", latlng: {lat: 50.995173, lng: 6.863101}, "categories": [0,2], stars: 3},
    {"id": 2, "name": "Cafe de oeste", latlng: {lat: 50.965173, lng: 6.903101}, "categories": [2,1], stars: 4.5},
    {"id": 3, "name": "Cafe de colonia", latlng: {lat: 50.845173, lng: 6.953101}, "categories": [2], stars: 3.8},
    {"id": 4, "name": "Cafe de Alemania", latlng: {lat: 50.995173, lng: 7.003101}, "categories": [1], stars: 2.1},
    {"id": 5, "name": "cruz del sur", latlng: {lat: 50.735173, lng: 6.753101}, "categories": [], stars: 3.3}
    ];
    let getCafes = () => cafes;
    module.exports = { getCafes };