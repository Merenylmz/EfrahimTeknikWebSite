const Message = require("../models/message");
const writeToLog = require("../helpers/loggerOperation");

module.exports.getMessages = async(req, res) =>{
    try {
        const messages = await Message.find();

        return res.send(messages);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.addMessages = async(req, res)=>{
    try {
        const newMessage = new Message({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            messages: req.body.messages,
            uploadDate: Date.now()
        });

        await newMessage.save();

        return res.send(newMessage);
    } catch (error) {
        writeToLog(error);
    }
}

module.exports.deleteMessage = async(req, res)=>{
    try {
        const deletedMessage = await Message.findOneAndDelete({_id: req.params.id});
        return res.send(deletedMessage);
    } catch (error) {
        writeToLog(error);
    }
}