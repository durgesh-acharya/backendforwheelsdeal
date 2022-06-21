const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5001;
const bodyParser = require('body-parser');


const cpjs = require('./routes/cp');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(cpjs);


app.get("/",(req,res) => {
    res.send("Shree Jay Ambe");
});


app.listen(port,()=>{
    console.log(`App listening to port no ${port}`);
    });