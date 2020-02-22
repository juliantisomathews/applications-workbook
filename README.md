# applications-workbook
assignment #3

Intro:
api, london, web-development

My Process / Development

Part 1 - Getting the API to work:

I used the following weather API for my assignment: https://www.metaweather.com/api/. 
I came across sever “CORE errors” when using the GET function so had to find an alternative. 
I used a proxy url ("https://cors-anywhere.herokuapp.com/") that allowed it to work.


Part 2 - Pulling the information I wanted from the API:

I had to parse through the json file.
Eventually, I pulled out this from the long string I had: $("#info").append(weather.consolidated_weather[weather.consolidated_weather.length - 1].weather_state_name).append('<br />');
This left with just the description element.


Part 3 - Some CSS:

Used flex-display: column; to make it all look nice and clean.

Built with
VS Code
Github

Author
Julian Mathews
