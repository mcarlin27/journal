var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    var entryWordCount = newEntry.wordCount();
    var entryVowelsConsonants = newEntry.vowelsConsonants();
    var teaser = newEntry.getTeaser();
    $("#entry-title").text(title);
    $("#entry-body").text(body);
    $("#word-count").text(entryWordCount);
    $("#vowel-count").text(entryVowelsConsonants.vowelCount);
    $("#consonant-count").text(entryVowelsConsonants.consonantCount);
    $("#teaser").text(teaser);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "3f6ce76893392781d81558e93ac12953";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
