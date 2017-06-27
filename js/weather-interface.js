var apiKey = "3f6ce76893392781d81558e93ac12953";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%")

      .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
    });
  });
});
