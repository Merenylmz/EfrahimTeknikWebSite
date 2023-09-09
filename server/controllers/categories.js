const writeToLog = require("../helpers/loggerOperation");
const Category = require("../models/category");

module.exports.getCategories = async(req, res)=>{
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        writeToLog(error)
    }
}

module.exports.getCategoryById = async(req, res)=>{
    try {
        const category = await Category.findOne({_id: req.params.id});
        res.send(category);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.addCategory = async(req, res)=>{
    try {
        const newCategory = new Category({
            name: req.body.name
        });
        await newCategory.save();
        res.send(newCategory);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.editCategory = async(req, res)=>{
    try {
        const updatedCategory = await Category.findOneAndUpdate({_id: req.params.id}, {
            name: req.body.name
        });
        await updatedCategory.save();
        res.send(updatedCategory);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.deleteCategory = async(req, res)=>{
    try {
        const deletedCategory = await Category.findOneAndDelete({_id: req.params.id});
        await deletedCategory.save();
        res.send(deletedCategory);
    }
    catch(error){
        writeToLog(error);
    }
}