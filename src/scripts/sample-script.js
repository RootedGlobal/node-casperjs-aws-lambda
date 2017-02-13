// Simple Javascript example..
var casper = require('casper').create();

var args = {
    email: casper.cli.get('email'),
    password: casper.cli.get('password')
};

console.log('parameters data:', JSON.stringify(args));

// Url's to scrape.
var url1 = 'http://casperjs.org/';
var url2 = 'http://phantomjs.org';

console.log('Loading a web page: ' + url1);
casper.start(url1, function() {
    this.echo('Page title: ' + this.getTitle());
});

console.log('Loading a web page: ' + url2);
casper.thenOpen(url2, function() {
    this.echo('Page title: ' + this.getTitle());
});

casper.run(function() {
    this.exit(); // close the casper instance.
});

// follow the casperjs documentation for more: http://docs.casperjs.org/en/latest/
