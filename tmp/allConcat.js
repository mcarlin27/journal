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
