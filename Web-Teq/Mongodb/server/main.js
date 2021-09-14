
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server)

const uri = 'mongodb://localhost:27017' // Mongodbのサーバー
MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    const db = client.db('school'); // データベースを作成
    console.log(`MongoDB Connected: ${uri}`); // MongoDBサーバーに接続
    const courses = db.collection('courses');
    courses.insertMany([
        { name: 'Web Design' },
        { name: 'Distributed Database' },
        { name: 'Artificial Intelligence' }
    ], (err, results) => {

    });
});

async function task1(msg) {
    console.log(`this is task 1, receiveng ${msg}`)
}

async function task2(msg) {
    console.log(`this is task 2, receiveng ${msg}`)
}

async function task3(msg) {
    console.log(`this is task 3, receiveng ${msg}`)
}

async function task4(msg) {
    console.log(`this is task 4, receiveng ${msg}`)
}

async function task5(msg) {
    console.log(`this is task 5, receiveng ${msg}`)
}

io.on('connect', (socket) => {
    console.log('a user connected');
    socket.on('task:1', task1);
    socket.on('task:2', task2);
    socket.on('task:3', task3);
    socket.on('task:4', task4);
    socket.on('task:5', task5);
});

server.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
