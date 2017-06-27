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
