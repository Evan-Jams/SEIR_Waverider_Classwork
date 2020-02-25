const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: type: String,
    img: String,
    price: Number,
    qty: Number
});


const Item = mongoose.model('Item', itemSchema)

module.exports = Item;
