// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013},
        { name: 'Tby', organization:"Mi casa", birth_year : 2018},
        { name: 'KLK', organization:"HUESCONISNG", birth_year : 2000}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
    var miguel = "MIGUEL";
    let lista = [54,25,65,4,685,65,654,64,65,154,56,5,5];
    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline,
        miguel: miguel,
        lista: lista,
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
