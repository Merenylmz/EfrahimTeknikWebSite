const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    services: String,
    pieceState: {
        type: Boolean,
        default: false
    },
    imageUrl: String,
    isitSale: Boolean,
    categoryId: [{type: mongoose.Schema.Types.ObjectId, ref: "Category"}]
}, {timestamp: true});

const Products = mongoose.model("Products", productSchema);

module.exports = {Products};