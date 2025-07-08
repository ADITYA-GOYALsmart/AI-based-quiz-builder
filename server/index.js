const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.subscribe(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Radhe Radhe from backend');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})