// 1. setup a node app with command: npm init
// 2. install express with command: npm install express
// 3. create a file named server.js and add the following code

const express = require('express');
const app = express();
const port = 3000;

const hbs = require("express-handlebars");

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");

// path module is used to work with file and directory paths
const path = require("path");

app.use(express.static(path.join(__dirname, "static")));
// generate routes
app.get('/', (req, res) => {
    let filepath = path.join(__dirname,"static","homepage.html");
    res.sendFile(filepath);
});

app.get("/images/sample.jpg", (req, res) => {
    let filepath = path.join(__dirname, "static", "about.html");
    res.sendFile(filepath);
});

// start the server
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')}
); 