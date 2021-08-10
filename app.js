const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');



const app = express();

app.use(express.json());


//routes

const postsRoutes = require('./routes/posts');

//midliware

app.use('/posts',postsRoutes);

//routes
app.get('/',(req,res)=>{
    res.send('GOD I need Your Intervention   ')
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},{ useUnifiedTopology: true },()=>{
    console.log('DB connected!')
});

app.listen('3000')
