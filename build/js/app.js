(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var titleLength = this.title.split(" ").length;
  var bodyLength = this.body.split(" ").length;
  return titleLength + bodyLength;
};

Entry.prototype.vowelsConsonants = function() {
  return {
    vowelCount: ((this.title.match(/[aeiou]/gi).length) + (this.body.match(/[aeiou]/gi).length)),
    consonantCount: ((this.title.match(/[bcdfghjklmnpqrstvwxyz]/gi).length) + (this.body.match(/[bcdfghjklmnpqrstvwxyz]/gi).length))
  };
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require("./../js/journal.js").entryModule;

$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    var entryWordCount = newEntry.wordCount();
    var entryVowelsConsonants = newEntry.vowelsConsonants();
    $("#entry-title").append(title);
    $("#entry-body").append(body);
    $("#word-count").append(entryWordCount);
    $("#vowel-count").append(entryVowelsConsonants.vowelCount);
    console.log(entryVowelsConsonants.vowelCount);
    $("#consonant-count").append(entryVowelsConsonants.consonantCount);
    console.log(entryVowelsConsonants.consonantCount);
  });
});

},{"./../js/journal.js":1}]},{},[2]);
