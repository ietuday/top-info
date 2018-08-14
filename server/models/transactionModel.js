var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var transactionModel = new Schema({
    _id: {
        type: String
    },
    suceess: {
        type: Boolean
    },
});

module.exports = mongoose.model('Transactions', transactionModel);