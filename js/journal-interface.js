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
    $("#entry-title").append(title);
    $("#entry-body").append(body);
    $("#word-count").append(entryWordCount);
    $("#vowel-count").append(entryVowelsConsonants.vowelCount);
    $("#consonant-count").append(entryVowelsConsonants.consonantCount);
    $("#teaser").append(teaser);
  });
});
