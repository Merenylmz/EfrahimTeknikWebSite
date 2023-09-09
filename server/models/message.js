const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    messages: String,
    uploadDate: Date
});

const Message = mongoose.model("Message", messageSchema);


module.exports = Message;