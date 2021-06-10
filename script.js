//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//think what the user has to do in order to start with the app

//global variables set
var APIkey = "592fe29192cc287a00ec4f4aa68923ec"
var searchBttn = document.querySelector('#inputSearch');
var cityTitle = document.querySelector('#cardTitle');
var weatherTemp = document.querySelector('#temp');
var weatherHumid = document.querySelector('#humidity');
var weatherWind = document.querySelector("#wind");
var weatherUV = document.querySelector("#uvindex")

//variables for day1 card
var wTemp1 = document.querySelector('#temp1');
var humid1 = document.querySelector('#humid1');
var wind1 = document.querySelector('#wind1');
var uv1 = document.querySelector('#uv1');

//variable for day2 card 2
var wTemp2 = document.querySelector('#temp2');
var humid2 = document.querySelector('#humid2');
var wind2 = document.querySelector('#wind2');
var uv2 = document.querySelector('#uv2');

//variable for day3 card 3
var wTemp3 = document.querySelector('#temp3');
var humid3 = document.querySelector('#humid3');
var wind3 = document.querySelector('#wind3');
var uv3 = document.querySelector('#uv3');

//variable for day4 card 4
var wTemp4 = document.querySelector('#temp4');
var humid4 = document.querySelector('#humid4');
var wind4 = document.querySelector('#wind4');
var uv4 = document.querySelector('#uv4');

//variable for day5 card 5
var wTemp5 = document.querySelector('#temp5');
var humid5 = document.querySelector('#humid5');
var wind5 = document.querySelector('#wind5');
var uv5 = document.querySelector('#uv5');

//function for when user searches city api querys are made 
function searchCity() {

  //grabs user input and sets it in a var called userInput
  var userInput = document.querySelector('#userinput').value;

  //api query with userInput as well as data in degrees and api key at the end
  let URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=" + APIkey

  //fetches the URL and makes a promise and returns response in json form
  fetch(URL, {
  }).then(function (response) {
    return response.json()
  
  //next promise grabs data and consoles data 
  }).then(function (data) {
    console.log(data)
    //setting var cityname to the name of the city in the data
    var cityname = data.city.name;
    var lat = data.city.coord.lat;
    //sets variables for lat and lon so we can grab them for next query
    var lon = data.city.coord.lon;

    //this query takes in lat and lon variables we just set
    let UVQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey

    //fetches uv query then the response returns in json form
    fetch(UVQueryURL).then(function (response) {
      return response.json();
      //consolelog 

    //this promise grabs the data and consoles the data from new api call and start to grab data to append to the page  
    }).then(function(data){
      //console data so i can look thru it
      console.log(data);
      //This is the start to append current weather of city to the main card 
      cityTitle.textContent = cityname;
      weatherTemp.textContent = "Tempeture:  ℉ "+ data.current.temp;
      weatherHumid.textContent = "Humidity: " + data.current.humidity;
      weatherWind.textContent = "Wind Speed: " + data.current.wind_speed;
      weatherUV.textContent = "UV Index: " + data.current.uvi;
      
      //dayone appends day 1 forecast
      wTemp1.textContent = "Tempeture:  ℉ " + data.daily[1].temp.day;
      humid1.textContent = "Humidity: " + data.daily[1].humidity;
      wind1.textContent = "Wind Speed: " + data.daily[1].wind_speed;
      uv1.textContent = "Uv: " + data.daily[1].uvi;
      //daytwo appends day 2 forecast
      wTemp2.textContent = "Tempeture:  ℉ " + data.daily[2].temp.day;
      humid2.textContent = "Humidity: " + data.daily[2].humidity;
      wind2.textContent = "Wind Speed: " + data.daily[2].wind_speed;
      uv2.textContent = "Uv: " + data.daily[2].uvi;
      //daythree appends day 3 forecast
      wTemp3.textContent = "Tempeture:  ℉ " + data.daily[3].temp.day;
      humid3.textContent = "Humidity: " + data.daily[3].humidity;
      wind3.textContent = "Wind Speed: " + data.daily[3].wind_speed;
      uv3.textContent = "UV: " + data.daily[3].uvi;
      //dayfour appends day 4 forecast
      wTemp4.textContent = "Tempeture:  ℉ " + data.daily[4].temp.day;
      humid4.textContent = "Humidity: " + data.daily[4].humidity;
      wind4.textContent = "Wind Speed: " + data.daily[4].wind_speed;
      uv4.textContent = "UV: " + data.daily[4].uvi;
      //dayfive appends day 5 forecast
      wTemp5.textContent = "Tempeture:  ℉ " + data.daily[5].temp.day;
      humid5.textContent = "Humidity: " + data.daily[5].humidity;
      wind5.textContent = "Wind Speed: " + data.daily[5].wind_speed;
      uv5.textContent = "UV: " + data.daily[5].uvi;
      // for (let i = 0; i < array.length; i++) {
      //  if(i = 6){break;}
        
      // }
    });
  });

}

searchBttn.addEventListener('click', searchCity)


//viewing the UV index the user is then presented with a color that indicates whether the conditions are favorable, moderate, or severe (moments) 

//also need to use local storage to display past search history 
//add an eventlistner so that when the button for a past city searched the city results are displayed 