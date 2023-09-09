const fs = require("fs");

module.exports = (errTxt)=>{
    const timestamp = new Date().toISOString();
    const logMessage = `Time: ${timestamp}, Hata--> ${errTxt} \n`;

    fs.appendFile("../server/log/app.log", logMessage, (err)=>{
        if (err) {
            console.log("bir hata var", err);
            return;
        }
    });

}