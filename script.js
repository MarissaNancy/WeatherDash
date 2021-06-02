//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//think what the user has to do in order to start with the app


var APIkey = "592fe29192cc287a00ec4f4aa68923ec"
var searchBttn = document.querySelector('#inputSearch');
var userInput = document.querySelector('#userinput');
var cityTitle = document.querySelector('#cardTitle');
var weatherInfo = document.querySelector('#cardBody');
var day = document.querySelector('#day')

function searchCity() {
  var city = userInput.value;
  var URL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=" + APIkey

  console.log(city)
  fetch(URL)
  .then(function(res){
    return res.json();
  }).then(function(results){
    console.log(results);
    cityTitle.textContent = results.city.name
    weatherInfo.textContent = 'temp: C ' + results.list[0].main.temp
   
  })
}

searchBttn.addEventListener('click', searchCity)

//make variables for card containers to append one 

//function to print results
// function printRes(){
//   //needs parameterd and can det link.setattribute or inner.html 
// }

//this function to pass on city name from user
// function getCityName(event) {
//   event.preventDefault();
//   var cityName = cityName.value

//   console.log(cityName);
// }

//function in case i need to change the units of measurement

//add to clear innerHTML add to cards in case user wants to search for another city

//i need to grab the future and current weather conditions 
//also the city name, date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//viewing the UV index the user is then presented with a color that indicates whether the conditions are favorable, moderate, or severe (moments) 
//need to grab future conditions for 5 days 
//this needs to be appended to the html next
//for the cards they need to displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity


//also need to use local storage to display past search history 
//add an eventlistner so that when the button for a past city searched the city results are displayed 