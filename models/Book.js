var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    authors: [
        {
            type: String,
            
        }
    ],

    description: {
        type: String,
        
    },

    image: {
        type: String,
    },

    link: {
        type: String,
        
    }

});

var Book = mongoose.model("book", BookSchema);

module.exports = Book;
