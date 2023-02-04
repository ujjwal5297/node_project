const express = require('express');

const app = express();

const portNumber = 8000;

// routing
app.get('/', (req, res)=>{
    res.send("Home Page");
});

app.get('/aboutus', (req, res)=>{
    res.send("Hello You are on About us page");
});

app.get('/contactus', (req, res)=>{
    res.send("Hello You are on Contact us page");
});

app.listen(portNumber, ()=>{
    console.log(`Listening on portNumber: ${portNumber}`);
});