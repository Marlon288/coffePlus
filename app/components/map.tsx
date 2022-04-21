import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import Places from "./places";
import { hrtime } from "process";
import logo from "../../css/images/coffeepluseLOGO.png";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;


//Get CafeData from DataBase 
const allCafes: {id: number, name: string, latlng: LatLngLiteral, categories: number[], stars: number}[] = [
  {"id": 0, "name": "Cafe Sur", latlng: {lat: 50.882, lng: 6.921301}, "categories": [0,1,2], stars: 5},
  {"id": 1, "name": "Cafe del Norte", latlng: {lat: 50.995173, lng: 6.863101}, "categories": [0,2], stars: 3},
  {"id": 2, "name": "Cafe de oeste", latlng: {lat: 50.965173, lng: 6.903101}, "categories": [2,1], stars: 4.5},
  {"id": 3, "name": "Cafe de colonia", latlng: {lat: 50.845173, lng: 6.953101}, "categories": [2], stars: 3.8},
  {"id": 4, "name": "Cafe de Alemania", latlng: {lat: 50.995173, lng: 7.003101}, "categories": [1], stars: 2.1},
  {"id": 5, "name": "cruz del sur", latlng: {lat: 50.735173, lng: 6.753101}, "categories": [], stars: 3.3},
]; 

//Get Categories from Database
const categories: { id: number, name: string, definition: string }[] = [
  { "id": 0, "name": "Lactose-Free milk", "definition": "The cafe offers a lactose free alternative milk, this could include any lactose fre milk"},
  { "id": 1, "name": "No disposable plastic", "definition": "The cafe does not use one-use plastic, this includes bags, cups, straws and more"},
  { "id": 2, "name": "Fairtrade Coffee", "definition":"The cafe only uses Fairtrade coffee certified by either Fair Trade Original or Fair Trade Certified"}
]; 


var numCategories = 5;     
var stateCheckBox = new Array(numCategories).fill(false);

function checked_0(){
  stateCheckBox[0] = !stateCheckBox[0];
}
function checked_1(){
  stateCheckBox[1] = !stateCheckBox[1];
}
function checked_2(){
  stateCheckBox[2] = !stateCheckBox[2];
}


export default function Map() {
  const [loc, setLoc] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({lat: 50.933594, lng: 6.961899}),[]);
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "dddd1ac2f8095ba2",
      disableDefaultUI: true,
      clickableIcon: false,
      minZoom: 11,
      maxZoom: 15,
    }),
    []
  );

  const getCafes = (position: LatLngLiteral) => {
    let cafes = [];
    for (let i = 0; i < allCafes.length; i++) {
      let latDiff = Math.sqrt(Math.pow(allCafes[i].latlng.lat - position.lat, 2));
      let lngDiff = Math.sqrt(Math.pow(allCafes[i].latlng.lng - position.lng, 2));
      
      if((latDiff < 0.1 && lngDiff < 0.1) && isInCategories(allCafes[i].categories)){
        cafes.push(<Marker onClick={() => {setName(allCafes[i].name); setReviews("This cafe has "+allCafes[i].stars +" out of 5 Stars");}} position={allCafes[i].latlng}/>);
      }    
    }
    return cafes;
  };
  

  

  const onLoad = useCallback(map => (mapRef.current = map), []);
  
  const [name, setName] =  useState('');
  const [reviews, setReviews] =  useState('');

 

  return <div className="container">
    <div className="controls">
     
      <h1 className="title"><img className="titleIcon" src="coffeeplusLOGO.png"></img>CafePlus</h1>
        <Places setLoc={(position) => {
          setLoc(position);
          mapRef.current?.panTo(position);
        }} 
      />
      <div className="containerCheckBoxen">
        <label className="containerCheckBox">Lactose-Free Milk
          <input type="checkbox" onClick={checked_0}/>
          <span className="checkmark"></span>
        </label>
        <label className="containerCheckBox">No disposable plastic
          <input type="checkbox" onClick={() => {checked_1;}}/>
          <span className="checkmark"></span>
        </label>
        <label className="containerCheckBox">Fairtrade Coffee
          <input type="checkbox" onClick={checked_2}/>
          <span className="checkmark"></span>
        </label>
      </div>
      <hr/>
      <div className="cafe">
            <p>
                    <h2>{name}</h2>
                    {name != "" && <hr/>}
                    {reviews}
            </p>
      </div>
      <div className="logoutDiv"><a href="home.html" className="logout"><svg className="logout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M938,500c0,16.7-7,31.7-18.1,42l0,0L737.4,711.6v0c-9.7,9-22.5,14.5-36.6,14.5c-30.2,0-54.8-25.3-54.8-56.5c0-16.7,7-31.7,18.1-42l0,0l76.5-71.1H408.7l0,0c-30.2,0-54.8-25.3-54.8-56.5s24.5-56.5,54.8-56.5l0,0h331.8l-76.5-71v0c-11.1-10.3-18.1-25.3-18.1-42c0-31.2,24.5-56.5,54.8-56.5c14.1,0,26.9,5.5,36.6,14.5l0,0L919.9,458l0,0C931,468.3,938,483.3,938,500z M390.5,123.1h-219v753.8h219c30.2,0,54.8,25.3,54.8,56.5c0,31.2-24.5,56.5-54.8,56.5H116.7C86.5,990,62,964.7,62,933.5V66.5C62,35.3,86.5,10,116.7,10h273.8c30.2,0,54.8,25.3,54.8,56.5C445.2,97.8,420.7,123.1,390.5,123.1z"></path></svg></a>    </div>
          </div>
    <div className="map">
     <GoogleMap 
      zoom={12} 
      center={center} 
      mapContainerClassName="map-container"
      options={options} 
      onLoad = {onLoad}
     >
       {loc && (
        <><Marker
        position={loc}
        icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
         />
        {getCafes(loc)}
      </>    
       )}
     </GoogleMap>
     
    </div>
  </div>;
}

function isInCategories(categories: number[]){
  for(let i = 0; i < stateCheckBox.length; i++){
    if(stateCheckBox[i] && !categories.includes(i)) return false;
  }   
  return true;
}




