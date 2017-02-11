// Simple Javascript example..
var casper = require('casper').create();
var utils = require('utils');

utils.dump(casper.cli.get('email'))
utils.dump(casper.cli.get('password'));
// OR
// utils.dump(casper.cli.raw.get('email'));
// utils.dump(casper.cli.raw.get('password'));

var url1 = 'http://casperjs.org/';
var url2 = 'http://phantomjs.org';

console.log('Loading a web page: ' + url1);
casper.start(url1, function() {
    this.echo('Page title is: ' + this.getTitle());
});

console.log('Loading a web page: ' + url2);
casper.thenOpen(url2, function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run(function() {
    this.exit(); // close the casper instance.
});

// follow the casperjs documentation for more: http://docs.casperjs.org/en/latest/
