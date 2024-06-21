require('dotenv').config();
const express = require('express')
const server = express()
const cors = require('cors')
const mongoose = require('mongoose')

const router = require('./routes/characters');
server.use('/characters', router);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to the database'));
server.use(express.json());
server.use(cors());

server.listen(3000, () => {
    console.log("Server started")
})