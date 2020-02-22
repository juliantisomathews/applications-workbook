window.addEventListener('DOMContentLoaded', async () => {
  
    var weather;

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.metaweather.com/api/location/44418/"; // site that doesn’t send Access-Control-*
    
        // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


    $("#refresh").click(function() {
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(function (contents) {
            console.log(contents);
            weather = JSON.parse(contents);
            weatherfunc();
        });
    });

    function weatherfunc () {
        console.log(weather);
        
        // for (let i = 0; i < weather.consolidated_weather.length; i++) {
        //     let thisWeather = weather.consolidated_weather[i].weather_state_name;
        //     let thisTime = weather.consolidated_weather[i].created;
        //     $("body").append(thisTime, "    ", thisWeather).append('<br />');

        // }

        // $("#info").append(weather.consolidated_weather[weather.consolidated_weather.length - 1].created, "  ",
        // weather.consolidated_weather[weather.consolidated_weather.length - 1].weather_state_name).append('<br />');

        $("#info").append(weather.consolidated_weather[weather.consolidated_weather.length - 1].weather_state_name).append('<br />');

    }



})