function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var titleLength = this.title.split(" ").length;
  var bodyLength = this.body.split(" ").length;
  return titleLength + bodyLength;
};

exports.entryModule = Entry;
