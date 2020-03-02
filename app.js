const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();
require('dotenv/config');


//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);

//ROUTES
app.get('/', function (req, res) {
    res.send('Hello');
});

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB!');
});
const connection=mongoose.connection;

app.listen(3000, () => { console.log("We are live on 3000") });