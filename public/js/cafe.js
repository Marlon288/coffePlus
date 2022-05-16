
let fillStarPath =       'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z';
let noFillStarPath =     "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z";
let halfFilledStarPath = "M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z";
let autocomplete;
var middle = true;



if( JSON.parse(localStorage.getItem('user')) === null)  window.location.href = "LogIn.html";


function getFillStar(i) {
  return `<svg  id="star${i}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ae722a" class="bi bi-star-fill" viewBox="0 0 16 16"><path id="${i}" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`;
}
function getNoFillStar(i){
  return `<svg id="star${i}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ae722a" class="bi bi-star" viewBox="0 0 16 16"><path id="${i}" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>`;
}
function getHalfFilledStar(i){
  return `<svg id="star${i}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ae722a" class="bi bi-star-half" viewBox="0 0 16 16"><path id="${i}" d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/></svg>`;

}

//Was not able to import the functions, because the Google API does not allow it. Sounds weird, but I have been testing and googled for ages trying to find a better solution
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }


function logout() {
    removeCurrentUser();
    window.location.href = "index.html";
}

function removeCurrentUser() {
    localStorage.removeItem('user')
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function initAutocomplete(){
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("location"),
    {
      types: ["geocode"],
      /*componentRestrictions: {"country": ["DE"]},*/
      fields: ["place_id", "geometry", "name"],
    });
  autocomplete.addListener("place_changed", onPlaceChanged);
}

function onPlaceChanged(){
    var place = autocomplete.getPlace();

    if(!place.geometry){
        document.getElementById("location").placeholder = "Location"
    }else{
        console.log(place.geometry.location.lat());
        console.log(place.geometry.location.lng());
        if(middle){
            document.getElementsByTagName("body")[0].style.justifyContent = "inherit";
            document.getElementById("form-group").style.position = "absolute";
            document.getElementById("form-group").style.top = "41%";
            document.getElementById("form-group").style.left = "25%";
            $("div.form-group").animate({ top: '-=40%' }, 400, showCafes);
            middle = false;
            console.log("test");
        }else{
            showCafes();
        }

        
        //showCafes(2500);
       // document.getElementsByTagName("body")[0].style.alignItems = "inherit";
         

    }
}


function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch(err){
    return "";
  }
}

async function showCafes(){
    
    if(middle === false){
        
        var place = autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        let cat = [];
        for(let i = 1; i<=3;i++){
          if(document.querySelector('#inlineCheckbox'+i).checked) cat.push(i);
        }
        fetchData('/cafes/searchResults', {Lng: lng, Lat: lat, categories: cat }, "POST")
        .then(async (data) => { 
          if(!data.message) {
            let current = document.getElementById("container"); 
            current.innerHTML = "";     
            let row = document.createElement("div");
            row.classList.add("row");
            current.appendChild(row);
            current = row;
            
            for(let i = 0;i<data.length;i++){ //Number of cafes
                
                let col = document.createElement("div");
                col.classList.add("col-xl-3", "col-lg-4", "col-md-6", "col-sm-12");
                col.setAttribute("id", "col-"+i);
                col.setAttribute("style", "display:none;")
                let card = document.createElement("div");
                card.classList.add("card", "mt-4");
                card.setAttribute("style", "height: 350px;");
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
        
                let title = document.createElement("h5");
                title.classList.add("card-title"); 
                title.appendChild(document.createTextNode(data[i].Name)); //insert cafe here
                cardBody.appendChild(title);
                let text = document.createElement("div");
                text.classList.add("card-text", "font-15");
        
                let list = document.createElement("ul");
                list.classList.add("list-group" ,"list-group-flush", "font-15");

                var categories = await getCategoryForCafe(data[i].ID);
                
                if(!categories.message){
                  for(let j = 0;j<categories.length;j++){ 
                    let listElement = document.createElement("li");
                    listElement.classList.add("list-group-item");
                    listElement.appendChild(document.createTextNode(categories[j].Name)); //Category
                    listElement.setAttribute("id", "category"+i+"!"+j)

                    list.appendChild(listElement);

                } 
                }
                
                var star = await getStarsforCafe(data[i].ID);
                
                star = star[0].total;
                let reviews = document.createElement("li");
                reviews.classList.add("list-group-item");
                reviews.setAttribute("id", "review"+i+"!");
                reviews.setAttribute("aria-label", "stars:" + star);
                
                reviews.innerHTML = getReviews(i, star);
                list.appendChild(reviews);
                text.appendChild(list);
                cardBody.appendChild(text);
                cardBody.innerHTML += '<a href="https://www.google.com/maps/search/?api=1&query='+lat+','+lng+'" target="_blank" class="button">Directions</a>'//Directions go to google '<a href="https://www.google.com/maps/search/?api=1&query='+lat+','+lng+'" class="button">Directions</a>'
                card.appendChild(cardBody);
                col.appendChild(card);
                col.setAttribute("aria-label", "CafeID:"+data[i].ID)
                current.appendChild(col);
                $("#col-"+i).fadeIn("slow");
                await sleep(250);
                generateStarHover(i);
                for(let j = 0;j<categories.length;j++){
                  tippy(document.getElementById("category"+i+"!"+j), {
                    content: categories[j].Definition,
                    animation: 'fade',
                    theme: 'light',
                    arrow: true,
                  });
                }
        
            }
          }
        })
        .catch((error) => {
          const errText = error.message;
          console.log(`Error! ${errText}`)
        });

    }

    
}

function generateStarHover(i){
  for(let k = 1;k<=5;k++){
    document.getElementById("star"+i.toString()+"!"+k.toString()).addEventListener("mouseover", function(event){
        let id = event.target.id;
        //console.log(id);
        id = id.split("!");
        idStars = id[0].replace("star", "");
        id = parseInt(id[1]);
        for(let i = 1; i<= id; i++){
            let el = document.getElementById(idStars+"!"+i.toString());
            el.setAttribute("d", fillStarPath);
        }
        for(let i = id+1; i<=5;i++){
          let el = document.getElementById(idStars+"!"+i.toString());
          el.setAttribute("d", noFillStarPath);
        }
        

        setTimeout(function() {
            let review = document.getElementById("review"+idStars+"!");
            let stars = review.getAttribute("aria-label").replace("stars:", "");  
            review.innerHTML = getReviews(idStars,stars);
            generateStarHover(idStars);
        }, 7500);



    }, false);
  
    document.getElementById("star"+i.toString()+"!"+k.toString()).addEventListener("click", function(event){
        let user = getCurrentUser();  
        if(user != ""){
            let id = event.target.id;
            //console.log(id);
            id = id.split("!");
            idStars = id[0].replace("star", "");
            id = parseInt(id[1]);
            col = document.getElementById("col-"+idStars);
            cafeID = col.getAttribute("aria-label").replace("CafeID:", "");
            let update = false;
            fetchData('/reviews/review', {UserID: user.ID, CafeID: cafeID}, "POST")
            .then((data) => { 
              if(!data.message && typeof data[0]=== "undefined") {
                update = true;
                fetchData('/reviews/edit', {UserID: user.ID, stars: id, CafeID: cafeID}, "PUT")
                .then((data) => { 
                  if(!data.message) {
                    alert("Thank you for updating your review on this establishment");
                  }
                })
                .catch((error) => {
                  const errText = error.message;
                  console.log(`Error! ${errText}`)
                });
              }else if(!data.message){
                fetchData('/reviews/new', {UserID: user.ID, stars: id, CafeID: cafeID}, "POST")
                .then((data) => { 
                  if(!data.message) {
                    alert("Thank you for reviewing this establishment");
                  }
                })
                .catch((error) => {
                  const errText = error.message;
                  console.log(`Error! ${errText}`)
                });

              }
            })
            .catch((error) => {
              const errText = error.message;
              console.log(`Error! ${errText}`)
            });

  

          }
    }, false);
  }
}

function getReviews(i, star){
  let j = 1;
  innerReview = "";
  while(j<=Math.floor(star)){
    innerReview += getFillStar(i+"!"+j);
    j++;
  }
  if(star - Math.floor(star) > 0.8){
    innerReview += getfillStar(i+"!"+j);
      j++;
  }else if(star - Math.floor(star) > 0.2){
    innerReview += getHalfFilledStar(i+"!"+j);
      j++
  }else if(star != 5 && star - Math.floor(star) > 0){
    innerReview += getNoFillStar(i+"!"+j);
      j++
  }
  while(j<=5){
      innerReview += getNoFillStar(i+"!"+j);
      j++;
  }
  return innerReview;
}

/*function getCafes(lat, lng) {
    let cafes = [];
    for (let i = 0; i < allCafes.length; i++) {
      let latDiff = Math.sqrt(Math.pow(allCafes[i].latlng.lat - position.lat, 2));
      let lngDiff = Math.sqrt(Math.pow(allCafes[i].latlng.lng - position.lng, 2));
      
      if((latDiff < 0.1 && lngDiff < 0.1) && isInCategories(allCafes[i].categories)){
        cafes.push(<Marker onClick={() => {setName(allCafes[i].name); setReviews("This cafe has "+allCafes[i].stars +" out of 5 Stars");}} position={allCafes[i].latlng}/>);
      }    
    }
    return cafes;
  };*/

var hidden = true;

async function getCategoryForCafe(ID){
  return fetchData('/cafes/category', {id: ID}, "POST")
  .then((data) => { 
    if(!data.message) {
        return data;
    }
  })
  .catch((error) => {
    const errText = error.message;
    console.log(`Error! ${errText}`)
    return error;
  });

}

async function getStarsforCafe(ID){
  return fetchData('/reviews/stars', {CafeID: ID}, "POST")
  .then((data) => { 
    if(!data.message) {
        return data;
    }
  })
  .catch((error) => {
    const errText = error.message;
    console.log(`Error! ${errText}`)
    return error;
  });
}

function filter(){



    let filter = document.querySelector("#filter-icon");
    let filterCheck = document.querySelector("#filter-check");
    if(hidden){
        filter.classList.remove("filter-icon");
        filter.classList.add("filter-icon-expanded");
        filterCheck.style.visibility = "visible";
        //$('#filter-icon').css('transform', 'scale(1,-1) ');
        animateRotate(0,90, '#filter-icon');
        hidden = false;
    }else{
        filter.classList.add("filter-icon");
        filter.classList.remove("filter-icon-expanded");
        hidden = true;
        filterCheck.style.visibility = "hidden";
        animateRotate(90, 0, '#filter-icon');
        
    }
}

function animateRotate(angleFrom, angleTo, id) {

  var $elem = $(id);

  $({deg: angleFrom}).animate({deg: angleTo}, {
      duration: 1000,
      step: function(now) {
          $elem.css({
              transform: 'rotate(' + now + 'deg)'
          });
      }
  });
}
