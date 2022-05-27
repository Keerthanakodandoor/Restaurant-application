const mongoose = require('mongoose');

var Menu = mongoose.model('Menu', {
    name: { type: String },
    category:{type:String},
    quantity:{type:Number},
    orderStatus:{type:Number},
    availableStatus:{type:Number},
    price:{type:Number}
});

module.exports = { Menu };