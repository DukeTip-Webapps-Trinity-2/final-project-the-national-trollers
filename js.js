//9bae2331c8d5d8dd13b22b120898358a

$(document).ready(function () {
    $(".submit").click(function() {
        var city = $('.city').val()
        var apiKey = "9bae2331c8d5d8dd13b22b120898358a";
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
        console.log(uri);
        $.get(uri, onRes);
    });
    });

function onRes(response) {
    console.log(response)
    $(".country").html(response.sys.country)
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description)
}    