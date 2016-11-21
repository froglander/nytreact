/**
 * Mongoose schema for Articles
 */

// require Mongoose
var mongoose = require('mongoose');

// Create schema class
var Schema = mongoose.Schema;

// Article schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

// Export the model
module.exports = Article;