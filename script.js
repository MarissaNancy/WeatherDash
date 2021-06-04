//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//think what the user has to do in order to start with the app

var APIkey = "592fe29192cc287a00ec4f4aa68923ec"
var searchBttn = document.querySelector('#inputSearch');
var userInput = document.querySelector('#userinput');
var cityTitle = document.querySelector('#cardTitle');
var weatherInfo = document.querySelector('#cardBody');
var dayOne = document.querySelector('#day');


//something like this 
// function getCityname(event) {
//   event.preventDefault();
//   var userCity = userInput.value
  
//   console.log(userInput);
// } look at rt app and see what we did for this function
//this is the function for the main card
function searchCity() {
  var city = userInput.value;
  var URL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=" + APIkey

  console.log(city)
  fetch(URL)
  .then(function(res){
    return res.json();
  }).then(function(results){
    console.log(results);
    cityTitle.textContent = results.city.name + ' ' + results.list[0].dt_txt
    weatherInfo.textContent = 'temp: C ' + results.list[0].main.temp
    weatherInfo.textContent = 'wind: ' + results.list[0].wind.speed + ' mph'
    weatherInfo.textContent = 'humidity : ' + results.list[0].main.humidity
   
    //add to html cause i did not do that yet
  })
}

searchBttn.addEventListener('click', searchCity)

//for getting city Object which is langituted and longitude to get uv indx
// let lat = response.city.coord.lat;
// let lon = response.city.coord.lon;
//let query uv 
// let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey 
// fetch(UVQueryURL)
// .then(function(response){
//     let UVIndex = document.createElement("span");
//     UVIndex.setAttribute("class","badge badge-danger");
//     UVIndex.innerHTML = res.dt[0].value;
//     currentUVEl.innerHTML = "UV Index: ";
//     currentUVEl.append(UVIndex);
//add to html so i can append?
// });
//something like this not exactly this//


//api call to get 5 day fourcast
//function to get forecast this is where i want to put the rest of the cards
// function forecast() {
//   var city = userInput.value;
//   var URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey

//   console.log(city)
//   fetch(URL)
//    .then(function(res){
//      return res.json();
//    }).then(function(results){
//      console.log(results);
//    })
// }

// searchBttn.addEventListener('click', forecast)


//make variables for card containers to append one 

//function to print results
// function printRes(){
//   //needs parameterd and can det link.setattribute or inner.html 
// }

//add to clear innerHTML add to cards in case user wants to search for another city

//also the city name, date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//viewing the UV index the user is then presented with a color that indicates whether the conditions are favorable, moderate, or severe (moments) 

//need to grab future conditions for 5 days 
//this needs to be appended to the html next
//for the cards they need to displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity


//also need to use local storage to display past search history 
//add an eventlistner so that when the button for a past city searched the city results are displayed 