const bcrypt = require("bcrypt");
const { Users, validateLogin, validateRegister } = require("../models/users");
const writeToLog = require("../helpers/loggerOperation");
const crypto = require("crypto");
const transporter = require("../helpers/send-mail");

module.exports.loginOperation = async(req, res)=>{
    try {
        const {error} = validateLogin(req.body);
        if (error) {
            writeToLog(error);
            return res.status(400).send({errTxt: "bilgileri doğru giriniz"});
        }

        const user = await Users.findOne({email: req.body.email});
        if (!user) {
            return res.status(404).send({errTxt: "Kullanıcı Bulunamadı"});
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            const token = user.createAuthToken();
            return res.status(200).send({token: token, isAuth: true});
        }

        res.send({token: null, isAuth: false});
    } catch (error) {
        writeToLog(error);
    }
}


module.exports.registerOperation = async(req, res)=>{
    try {
        const {error} = validateRegister(req.body);
        if (error) {
            writeToLog(error);
            return res.status(400).send("Hata", error);
        }
        const user = await Users.findOne({email: req.body.email});
        if (user) {
            writeToLog("Böyle Bir Kullanıcı Zaten Mevcut");
            return res.status(400).send({errTxt: "Böyle Bir Kullanıcı Zaten Mevcut"});
        }


        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();

        const token = newUser.createAuthToken();

        res.header("x-auth-token", token).send(newUser);
        
    } catch (error) {
        writeToLog(error);
    }
}


module.exports.getUserById = async(req, res)=>{
    try {
        const user = await Users.findOneAndUpdate({_id: req.params.id}, req.body);
        if (!user) {
            return res.send("kullanıcı Bulunamadı");
        }

        res.send(user);

    } catch (error) {
        writeToLog(error);
    }
}


module.exports.forgotpassword = async(req, res)=>{
    try {
        const user = await Users.findOne({email: req.body.email});
        if (!user) {
            return res.send({errTxt: "Böyle Bir Kullanıcı Bulunamadı"});
        }

        const token = crypto.randomBytes(32).toString("hex");
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + (1000*60*60);
        await user.save();

        await transporter.sendMail({
            from: "myma_ilsender@hotmail.com",
            to: user.email,
            subject: "New Password Verify",
            html: `
                <h2>New Password Verify before change</h2>
                <p>if you want change your password you should click a link</p>
                <a href="http://localhost:3000/auth/newpassword/${token}">Change Password</a>
            `
        });

        res.send(true);
    } catch (error) {
        writeToLog(error);
    }
}


module.exports.newpassword = async(req, res)=>{
    try {
        const user = await Users.findOne({
            resetToken: req.params.token,
            resetTokenExpiration: {
                $gt: Date.now()
            },
        });
        if (!user) {
            return res.send("Böyle bir kullanıcı bulunamadı token bilgilerinizi kontrol ediniz");
        }

        user.resetToken = null;
        user.resetTokenExpiration = null;
        user.password = await bcrypt.hash(req.body.password, 10);
        await user.save();

        res.send(true);
    } catch (error) {
        writeToLog(error);
    }
}