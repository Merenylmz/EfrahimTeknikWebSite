const { Products, Category } = require("../models/products");
const writeToLog = require("../helpers/loggerOperation");


module.exports.getAll = async(req, res)=>{
    try {
        const products = await Products.find().select("-categories._id");
        res.send(products);

    } catch (error) {
        writeToLog(error);
    }
}

module.exports.getLimitedProducts = async(req, res)=>{
    try {
        const products = await Products.find().limit(req.params.number);
        res.send(products);
    } catch (error) {
        writeToLog(error)
    }
}

module.exports.getProductById = async(req, res)=>{
    try {
        const product = await Products.findOne({_id: req.params.id});
        if (!product) {
            return res.status(404).json({errTxt: "Ürün Bulunamadı"});
        }
        
        res.send(product);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.getProductByCategoryId = async(req, res)=>{
    try {
        const products = await Products.find({categoryId: req.params.categoryid});

        res.send(products);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.addProduct = async(req, res)=>{
    try {
        const newProduct = new Products({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            services: req.body.services,
            pieceState: req.body.pieceState,
            imageUrl: req.body.imageUrl,
            categoryId: [req.body.categoryId]
        });

        await newProduct.save();

        res.status(201).send(newProduct);
    } catch (error) {
        writeToLog(error);
    }
}


module.exports.deleteProduct = async(req, res)=>{
    try {
        const product = await Products.findOneAndDelete({_id: req.params.id});
        res.status(200).send(product);

    } catch (error) {   
        writeToLog(error);
    }
}


module.exports.updateProduct = async(req, res)=>{
    try {
        const product = await Products.findOneAndUpdate({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            services: req.body.services,
            pieceState: req.body.pieceState,
            imageUrl: req.body.imageUrl,
            categoryId: [req.body.categoryId]
        });

        res.status(200).send(product);
    } catch (error) {
        writeToLog(error);
    }
}