// src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {  
    const {name} = req.params; //const nafn = req.parms.name;
    return res.send({greeting: greeting(name)});
});
    
    module.exports = app;