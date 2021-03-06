// Server dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Mongoose schemas
var Article = require('./models/Article');

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

/* ************************************************************************ */
/*                                 Mongoose                                 */
/* ************************************************************************ */
//mongoose.connect('mongodb://localhost/nyreact');
mongoose.connect('mongodb://heroku_lq53bpq6:qnmj7a2cngco4svmn7jf5bjaeq@ds119728.mlab.com:19728/heroku_lq53bpq6');


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
    console.log("Retrieve saved articles");
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
app.post('/api/saved', function(req, res){
    console.log("Post an article to save");

    var newArticle = new Article(req.body);

    console.log(req.body)

    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    newArticle.save(function(err, doc){
        if(err){
            console.log(err);
        } else {
            // Return mongoose id of documente saved
            res.send(doc._id);
        }
    });
});

// DELETE an article from the saved list
app.delete('/api/saved/', function(req, res) {
    var url = req.param('url');

    Article.find({"url": url}).remove().exec(function(err, data) {
        if(err){
            console.log("Error on delete: ", err);
        } else {
            res.send("Deleted");
        }
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT: ", PORT);
});