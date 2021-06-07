//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//think what the user has to do in order to start with the app

var APIkey = "592fe29192cc287a00ec4f4aa68923ec"
var searchBttn = document.querySelector('#inputSearch');
var cityTitle = document.querySelector('#cardTitle');
var weatherTemp = document.querySelector('#temp');
var dayOne = document.querySelector('#day');


//  var city = userInput.value;
// var URL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=" + APIkey
//this is the function for the main card
//put cityname in this function and remove var city
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
      weatherTemp.textContent = "Tempeture:  ℉ "+data.current.temp;

      for (let i = 0; i < array.length; i++) {
       if(i = 6){break;}
        
      }
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

//add to html cause i did not do that yet
//   })
// }

//for button change to getcityname so i can pass onto func searchcity and forcast
searchBttn.addEventListener('click', searchCity)

// fetch(url, {
//   }).then(function(response) {  
//    response.json()
    //.then(function(data) {  
    // let lat = results.city.coord.lat;
//    let lon = results.city.coord.lon;
//    let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey  
  //fetch(UVQueryURL).then(function(response) {
//        return response.json();
//   
//        
//  });
//    }); 

//for getting city Object which is langituted and longitude to get uv indx

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