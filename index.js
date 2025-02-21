let btn = document.querySelector("#btn");
let temp = document.querySelector("#tem");
let locat = document.querySelector("#location");
let dat = document.querySelector("#data");
let c = document.querySelector("#c");

weather("new york");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let cityInput = document.querySelector("#city"); 
  let cityname = cityInput.value; 
  
  if (cityname.trim() !== "") { 
    weather(cityname);
  }
  
  cityInput.value = "";


})
async function weather(city) {
  try {
    let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=DYLA2Z3V4N5GMCD9PRVD5HQQV&contentType=json`, { mode: 'cors' }).then(res => res.json());
    temp.innerHTML = data.days[0].temp;
    locat.innerHTML = data.resolvedAddress;
    dat.innerHTML = data.currentConditions.conditions;
     pic(data.currentConditions.conditions);
let humidity = data.currentConditions.humidity;
let feelslike = data.currentConditions.feelslike;
let windspeed  = data.currentConditions.windspeed;
let dew = data.currentConditions.dew;

     dataw(humidity,feelslike,windspeed,dew);
     console.log(data);

 

  }
  catch (error) {
    console.log(error);
  }
}


function dataw(humdity,feels,windspeed,dew){
  c.innerHTML= `
             <div class="txt">Humidity - ${humdity}%</div>
             <div class="txt">Feels-like - ${feels}&degF</div>
             <div class="txt">Windspeed - ${windspeed}km/h</div>
             <div class="txt">Dew - ${dew}&degF</div>
  
  
  `
}

let container = document.querySelector(".container");
function pic(weatherCondition) {
  let condition = weatherCondition.toLowerCase();

  if (condition.includes("overcast")) {
    container.style.backgroundImage = "url('img/HEROWALL-41020232.jpg')";
   
  } else if (condition.includes("rain")) {
    container.style.backgroundImage = "url('img/heroscreen-53120234.png')";
   
  } else if (condition.includes("partially cloud")) {
    container.style.backgroundImage = "url('img/green-serene-mountain-village-desktop-wallpaper.jpg')";

  
  } else if(condition.includes("snow")){
    container.style.backgroundImage = "url('img/frozen-lake-winter-scenery-desktop-wallpaper-4k.jpg'";
  }
  else if(condition.includes("clear")){
    container.style.backgroundImage = "url('img/moonlit-lake-serene-landscape-desktop-wallpaper.jpg')";
}
else if(condition.includes("windy")){
  container.style.backgroundImage = "url('img/one-piece-luffy-skyview-field-desktop-wallpaper.jpg')";
}
}