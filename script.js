//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//think what the user has to do in order to start with the app


var ApIkey = "592fe29192cc287a00ec4f4aa68923ec"
var searchBttn = document.querySelector('#inputSearch');
var userInput = document.querySelector('#userinput');

function searchCity() {
  var city = userInput.nodeValue;
  var URL = "http://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=" + APIkey

  fetch(URL)
  .then(function(res){
    console.log(res)
  })
}

searchBttn.addEventListener('click', searchCity)

//make variables for card containers


