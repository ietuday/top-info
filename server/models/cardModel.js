var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var cardModel = new Schema({
    _id: {
        type: String
    },
    card_number: {
        type: Number
    },
    pin: {
        type: Number
    },
    balance: {
        type: Number 
    }
});

module.exports = mongoose.model('Cards', cardModel);