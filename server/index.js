const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const messageRoutes = require("./routes/messages");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors({
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    origin: "*",
}));
app.use("/products", productsRoutes);
app.use("/auth", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/messages", messageRoutes);

app.get("/", (req, res)=>{
    res.send("anasayfa");
});


mongoose.connect(process.env.MongoDbConnectionString)
    .then(()=>{
        console.log("MongoDb Bağlantısı Kuruldu");
        app.listen(3001, ()=>console.log("Listening a port 3001"));
    })
    .catch((e)=>console.log("Hata Var -->", e))

