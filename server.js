// Server dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Express
var app = express();
var PORT = process.env.PORT || 3000;

// Morgan for logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/nyreact');
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose error: ", err);
});

db.once('open', function() {
    console.log('Mongoose connection successful');
});

/* ************************************************************************ */
/*                                  Routes                                  */
/* ************************************************************************ */
// Main route
app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

// GET saved articles route
app.get('/api/saved', function(req, res) {
    // Retrive all articles
    Article.find({})
        .exec(function(err, doc) {
            if(err) {
                console.log("Error:", err);
            } else {
                res.send(doc);
            }
        })
});

// POST an article to save
app.post('/api/saved', function(req, res) {
    var saveArticle = new Article(req.body);

    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    saveArticle.save(function(err, doc) {
        if(err) {
            console.log("Error:", err);
        } else {
            // Return mongoose ide of document (article)
            res.send(doc._id);
        }
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT: ", PORT);
});