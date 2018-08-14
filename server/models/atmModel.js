var mongoose = require('mongoose'),
 Schema = mongoose.Schema;


var atmModel = new Schema({
    _id:{
        type: String
    },
    currency_denomination:{
        type: String
    },
    count:{
        type: Number
    }
});

module.exports = mongoose.model('Atm', atmModel);