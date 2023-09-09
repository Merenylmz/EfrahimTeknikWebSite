const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secure: false,
    tls: {
        ciphers: "SSLv3"
    },
    port: 587,
    auth:{
        user: "myma_ilsender@hotmail.com",
        pass: "mailsender2828"
    }
});

module.exports = transporter;