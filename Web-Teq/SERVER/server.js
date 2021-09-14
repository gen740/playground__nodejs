// const http = require('http');
// const server = http.createServer();

// server.on('request', function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.write('Hello World')
//     res.end()
// })

// server.listen(3000)

// Express
//
const express = require("express");
const app = express();

const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy

const port = 3000;

const User1 = {
    nome: "Taro",
    password: "Taro123"
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    res.send("POST request to the homepage");
});

app.get("/test", (req, res) => {
    res.send("test");
});

app.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.redirect('/users/' + req.user.username)
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
