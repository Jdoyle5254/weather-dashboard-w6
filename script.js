
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast  we would need to utilize local storage to keep the previous search data in place (I have used this previously in two activities)
// here the previous search is saved exactly as the calendar events from last weeks homework

// not required but I felt this to be a nice addition to the page.  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
 
// here is the function to make the API call to get the weather for the input city
function getWeather(cityName) {
  
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&mode=json&appid=37289ef0ebc892b45b4494eafa88ceac"

$.ajax({
    url: queryURL,  
    method: "GET"
  }).then(function(response) {
   var cityW = {
     city: response.city.name,
     temp: response.list[0].main.temp,
     humidity: response.list[0].main.humidity,
     wind: response.list[0].wind.speed,
   }

   console.log(response)
  //  Here the information for the General weather will appear
   $("#citySearch").text(response.city.name + " " + moment(response.list.dt_txt).format("MM/DD/YYYY") );
   $(".current-icon").children().remove();
   $(".current-icon").append("<img src='https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon +".png'/>"); 
   $("#temp").text("Temperature: " + response.list[0].main.temp.toFixed() + "F");
   
   $("#humidity").text("Humidity: " + response.list[0].main.humidity + "%");
   $("#wind").text("Wind: " + response.list[0].wind.speed);

   $(".icon").children().remove();
  // here is a for loop to pull and populate the 5 day forecast for the selected city
 
   for (var i=0; i < 5; i++ ) {
      $(".day-" + (i + 1) + ">.date").text(moment(response.list[i * 8 + 3 ].dt_txt).format("MM/DD/YYYY"));
      $(".day-"+ (i + 1) +">.temp-five").text("Temp: " + response.list[i * 8 + 3].main.temp.toFixed() + "F");
      $(".day-"+ (i + 1) +">.humid").text("Humidity: " + response.list[i * 8 + 3].main.humidity + "%");
      $(".day-"+ (i + 1) +">.icon").append("<img src='https://openweathermap.org/img/wn/" + response.list[i * 8 + 3].weather[0].icon +".png'/>"); 
   }
   $.ajax({
    url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&appid=37289ef0ebc892b45b4494eafa88ceac", 
    method: "GET"
  }).then(function(uvResponse) {
      $("#uv > span").text(uvResponse.value);
       
      if (uvResponse.value  > 0.0 && uvResponse.value < 2.0) {
         $("#uv > span").addClass("uv-low");
      }
      else if (uvResponse.value  > 2.0 && uvResponse.value < 5.0) {
        $("#uv > span").addClass("uv-mod");
     }
     else if (uvResponse.value  > 5.0 && uvResponse.value < 10.0) {
      $("#uv > span").addClass("uv-high");
   }
  });
      
    
  });
}

// this is the main click event to take the user input and apply to getWeather function, and also locally store for future use.
$("#mainSearch").click(function(){ 
  
    getWeather($("#cityName").val());
    var cityArray = JSON.parse(window.localStorage.getItem("cities")) || [];
    cityArray.push($("#cityName").val());
    window.localStorage.setItem("cities", JSON.stringify(cityArray));
    $("#cityPrv").children().remove();
    renderCities();

    // $(“#cityPrv”).append(cityName)
});

 function renderCities () {
   var cityBtns = JSON.parse(window.localStorage.getItem("cities")) || []
  for (var i = 0; i < cityBtns.length; i++)  {
    var a = $("<button>");
    var li = $("<li>");
    // // Adding a class of button
    a.addClass("city-btn");
    // // Adding a data-attribute
    a.attr("data-name", cityBtns[i]);
    // // Providing the initial button text
    a.text(cityBtns[i]);
    // // Adding the button to list item
    li.append(a);
    $("#cityPrv").append(li);

     
  }
$(".city-btn").click(function(){
  getWeather($(this).attr("data-name"));
})

}
 
 renderCities();

  