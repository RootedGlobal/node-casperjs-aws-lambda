// Simple Javascript example
var casper = require('casper').create();
var url = 'http://casperjs.org/';

console.log('Loading a web page: ' + url);

casper.start(url, function() {
  this.echo('Page title is: ' + this.getTitle());
});

casper.run();