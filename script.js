//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//think what the user has to do in order to start with the app

var APIkey = "592fe29192cc287a00ec4f4aa68923ec"
var searchBttn = document.querySelector('#inputSearch');
var cityTitle = document.querySelector('#cardTitle');
var weatherTemp = document.querySelector('#temp');
var weatherHumid = document.querySelector('#humidity');
var weatherWind = document.querySelector("#wind");
var weatherUV = document.querySelector("#uvindex")

var wTemp1 = document.querySelector('#temp1');
var humid1 = document.querySelector('#humid1');
var wind1 = document.querySelector('#wind1');
var uv1 = document.querySelector('#uv1');

var wTemp2 = document.querySelector('#temp2');
var humid2 = document.querySelector('#humid2');
var wind2 = document.querySelector('#wind2');
var uv2 = document.querySelector('#uv2');

var wTemp3 = document.querySelector('#temp3');
var humid3 = document.querySelector('#humid3');
var wind3 = document.querySelector('#wind3');
var uv3 = document.querySelector('#uv3');

var wTemp4 = document.querySelector('#temp4');
var humid4 = document.querySelector('#humid4');
var wind4 = document.querySelector('#wind4');
var uv4 = document.querySelector('#uv4');

var wTemp5 = document.querySelector('#temp5');
var humid5 = document.querySelector('#humid5');
var wind5 = document.querySelector('#wind5');
var uv5 = document.querySelector('#uv5');

// var URL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=" + APIkey
//this is the function for the main card

function searchCity() {

  var userInput = document.querySelector('#userinput').value;

  let URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&units=imperial&appid=" + APIkey

  fetch(URL, {
  }).then(function (response) {
    return response.json()
    
  }).then(function (data) {
    console.log(data)
    var cityname = data.city.name;
    var lat = data.city.coord.lat;
    //console.log lat and lon
    var lon = data.city.coord.lon;

    let UVQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey

    fetch(UVQueryURL).then(function (response) {
      return response.json();
      //consolelog 

    }).then(function(data){
      console.log(data);
      //here where you would render 
      cityTitle.textContent = cityname;
      weatherTemp.textContent = "Tempeture:  ℉ "+ data.current.temp;
      weatherHumid.textContent = "Humidity: " + data.current.humidity;
      weatherWind.textContent = "Wind Speed: " + data.current.wind_speed;
      weatherUV.textContent = "UV Index: " + data.current.uvi;
      //dayone
      wTemp1.textContent = "Tempeture:  ℉ " + data.daily[1].temp.day;
      humid1.textContent = "Humidity: " + data.daily[1].humidity;
      wind1.textContent = "Wind Speed: " + data.daily[1].wind_speed;
      uv1.textContent = "Uv: " + data.daily[1].uvi;
      //daytwo
      wTemp2.textContent = "Tempeture:  ℉ " + data.daily[2].temp.day;
      humid2.textContent = "Humidity: " + data.daily[2].humidity;
      wind2.textContent = "Wind Speed: " + data.daily[2].wind_speed;
      uv2.textContent = "Uv: " + data.daily[2].uvi;
      //daythree
      wTemp3.textContent = "Tempeture:  ℉ " + data.daily[3].temp.day;
      humid3.textContent = "Humidity: " + data.daily[3].humidity;
      wind3.textContent = "Wind Speed: " + data.daily[3].wind_speed;
      uv3.textContent = "UV: " + data.daily[3].uvi;
      //dayfour
      wTemp4.textContent = "Tempeture:  ℉ " + data.daily[4].temp.day;
      humid4.textContent = "Humidity: " + data.daily[4].humidity;
      wind4.textContent = "Wind Speed: " + data.daily[4].wind_speed;
      uv4.textContent = "UV: " + data.daily[4].uvi;
      //dayfive
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

// console.log(userCity)
// fetch(URL)
// .then(function(res){
//   return res.json();
// }).then(function(results){
//   console.log(results);
//   cityTitle.textContent = results.city.name + ' ' + results.list[0].dt_txt
//   //have to create div first?
//   //var weatherInfo = document.querySelector('#cardBody') 
//   //var cardBodyInfo = document.createElement('div');
//   //cardBodyInfo.classlist.add('card?')
//   //weatherInfo.append(cardBodyInfo)
//   weatherInfo.textContent = 'temp: C ' + results.list[0].main.temp
//   weatherInfo.textContent = 'wind: ' + results.list[0].wind.speed + ' mph'
//   weatherInfo.textContent = 'humidity : ' + results.list[0].main.humidity

searchBttn.addEventListener('click', searchCity)



//add to clear innerHTML add to cards in case user wants to search for another city

//viewing the UV index the user is then presented with a color that indicates whether the conditions are favorable, moderate, or severe (moments) 

//also need to use local storage to display past search history 
//add an eventlistner so that when the button for a past city searched the city results are displayed 