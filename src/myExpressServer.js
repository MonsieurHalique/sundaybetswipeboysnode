const express = require("express");
const app = express();

app.all("*",(reg,res) =>{
    res.send("<h1>Test12345</h1>");
});

app.listen(1337);
console.log("test");