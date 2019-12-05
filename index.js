const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/slide.html");
});

app.get('/img1.jpg',(req,res)=>{
    res.sendFile(__dirname + "/img1.jpg");
});

app.get('/img2.jpg',(req,res)=>{
    res.sendFile(__dirname + "/img2.jpg");
});

app.get('/img3.jfif',(req,res)=>{
    res.sendFile(__dirname + "/img3.jfif");
})