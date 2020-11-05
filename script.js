// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// HTML page with User INput form for the city/location also need to store this information to disply on the page.    We would need to capture this information in localstorage. 

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// We would then use the city input by the user to 
//  create an AJAX function to call for the data from Open weather using: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}   weatherAPI Key:  48c80edfe01fd8096c0b8eddb796e617
// once we get the data returned we would need to parse the details to capture the following  (information is already JSON) an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index -- need to find the UV index in open weather
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// We would need to retrieve the above information from local storage to display on the screen.  

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// We would need to retrieve the above information from local storage to display on the screen.  

// WHEN I click on a city in the search history  This would be an on-clickevent that would run the previous fuction
// the city becomes a button/onclick to show the weather, etc. 
// each city would be prepended to the existing DIV of citys
// THEN I am again presented with current and future conditions for that city
// This would be a repeat call from above to gather and display the data from a different input/button click

// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast  we would need to utilize local storage to keep the previous search data in place (I have used this previously in two activities)
// here the previous search is saved exactly as the calendar events from last weeks homework
// ```
// not required but I felt this to be a nice addition to the page.  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
 
// We have an input field called City Name that a user inputs the city, this city would then be submitted to populate in the queryURL as + cityName +   the function would then run with the following 
// here we are using the api key to make the ajax call to openweathermap based on the user input city.  

function getWeather(cityName) {
  
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&mode=json&appid=37289ef0ebc892b45b4494eafa88ceac"

$.ajax({
    url: queryURL,  
    method: "GET"
  }).then(function(response) {
  
    console.log(response.list[0].main.temp);
    console.log(response.list[0].main.humidity);
    console.log(response.list[0].weather.description);
    console.log(response.list[0].wind.speed);
    console.log(response.list); 
  });
}
// getWeather("London")


$("#mainSearch").click(function(){ 
     var cityArray = window.localStorage.getItem("cities") || [];
    cityArray.push($("#cityName")[0].value);
    window.localStorage.setItem("cities", (cityArray));
})
 function renderCities () {
   var cityBtns = window.localStorage.getItem("cities")
  for (var i = 0; i < cityBtns.length; i++)  {
    var a = $("<button>");
    // // Adding a class of movie to our button
    a.addClass("city");
    // // Adding a data-attribute
    a.attr("data-name", cityBtns[i]);
    // // Providing the initial button text
    a.text(cityBtns[i]);
    // // Adding the button to the buttons-view div
    $("#cityPrv").append(a);

    // cityBtns[i].addEventListener('click', userResponse)
  }
 }
 renderCities()


  // after the queryURL is run the page displays the various weather information on the page for current weather and 5 day forecast

  // The city the USER input is also stored as a 'history search' using local storage to display the city and this also becomes an  'on-click' that the user can click again to get the weather from that city.   

  // the onclick event would re-run the ajax call and disply that citys' information  jWe would need an on-click that calls that function.  

  // WHEN I click on a city in the search history  This would be an on-clickevent that would run the previous fuction
  // the city becomes a button/onclick to show the weather, etc. 
  // each city would be prepended to the existing DIV of citys
  // THEN I am again presented with current and future conditions for that city
  // This would be a repeat call from above to gather and display the data from a different input/button click

  //  Storing the user input (city and storing and displaying) needing function to store the input. 

//   function userCity (){   
//     window.localStorage.setItem($(this)  
// });
   
//       function showCity() {
//          for (var i = 7; i < 20; i++ ) {
           
//                $(" "+ i +">.").val(window.localStorage.getItem("#cityName" + i));
//          }
    
         
//       }

// below is sample code from previous activities and homeworks that could be utilized
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
// // variation of this code to prepend the city information
// $("button").click(function(){
   
//   window.localStorage.setItem($(this).parent().children(".note").attr("name"), $(this).parent().children(".note").val());
//  });


//   function showNotes() {
//      for (var i = 7; i < 20; i++ ) {
       
//            $(".row.hour-"+ i +">.note").val(window.localStorage.getItem("textarea-" + i));
//      }

     
//   }
// // sample code to turn result into a button?  also done in week 4 homework with answers?
// var a = $("<button>");
// // Adding a class of movie to our button
// a.addClass("movie");
// // Adding a data-attribute
// a.attr("data-name", movies[i]);
// // Providing the initial button text
// a.text(movies[i]);
// // Adding the button to the buttons-view div
// $("#buttons-view").append(a);
// }
// }

// // This function handles events where one button is clicked
// $("#add-movie").on("click", function(event) {
// event.preventDefault();

// // This line grabs the input from the textbox
// var movie = $("#movie-input").val().trim();

// // Adding the movie from the textbox to our array
// movies.push(movie);
// console.log(movies);

// // Calling renderButtons which handles the processing of our movie array
// renderButtons();
// });

// // Function for displaying the movie info
// // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
// $(document).on("click", ".movie", displayMovieInfo);

// // Calling the renderButtons function to display the initial buttons
// renderButtons();