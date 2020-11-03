// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// HTML page with User INput form for the city/location also need to store this information to disply on the page.    We would need to capture this information in localstorage. 

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// We would then use the city input by the user to 
//  create an AJAX function to call for the data from Open weather using: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}   weatherAPI Key:  48c80edfe01fd8096c0b8eddb796e617
// once we get the data returned we would need to parse the details to capture the following  (information is already JSON) an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// We would need to retrieve the above information from local storage to display on the screen.  

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// We would need to retrieve the above information from local storage to display on the screen.  

// WHEN I click on a city in the search history  This would be an on-clickeven 
// THEN I am again presented with current and future conditions for that city
// This would be a repeat call from above to gather and display the data from a different input/button click

// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast  we would need to utilize local storage to keep the previous search data in place (I have used this previously in two activities)

// ```
// not required but I felt this to be a nice addition to the page.  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    
// here we are using the api key to make the ajax call to openweathermap
var cityName = "London"
var queryURL = "api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=37289ef0ebc892b45b4494eafa88ceac"

$.ajax({
    url: queryURL,  
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

//   code to get and store inputs by user 
//   function highScore() {
            
//     var name = userName.value.trim();
//     var userScore = {
//         score: score,
//         name: name
//     };
//     var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
//     highScores.push(userScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highScores));

//     var gameEnds = document.querySelector("#game-over-area")
//     gameEnds.setAttribute("class", "hide")
   
//     var leaderBoard = document.querySelector("#leaderboard-area")
//     leaderBoard.removeAttribute("class");
    
//     var listItem = document.getElementById("users-scores")
//     listItem.innerHTML = "";

//     highScores.forEach(function(score) {
//         var liTag = document.createElement("li")
//         liTag.textContent = score.name
//         listItem.appendChild(liTag)
//     })
// }
