var mongoose = require('mongoose');

// Movie Schema
var movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    release_date:{
        type: Date,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    rating:{
        type: String
    },
    thumbnail:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Movie = module.exports = mongoose.model('Movie', movieSchema, 'Movies');


