const jwt = require("jsonwebtoken");
const writeToLog = require("../helpers/loggerOperation");
require("dotenv").config();

module.exports = (req, res, next)=>{
    try {
        const token = req.header("x-auth-token");
        if (!token) {
            return res.status(404).send({errTxt: "Bir Token Bilginiz yok"});
        }
        const decodedToken = jwt.verify(token, process.env.JWTSecretKey);
        req.user = decodedToken;
        next(); 
        
    } catch (error) {
        writeToLog(error);
    }
}