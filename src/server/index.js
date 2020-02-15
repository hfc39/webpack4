projectData = {};
var path = require('path');
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const app = express();

/*Dependency body parser*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*cors*/
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

/*dotenv*/
const dotenv = require('dotenv');
dotenv.config();

console.log(__dirname)

// designates what port the app will listen to for incoming requests
const port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port'${port});
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

const aylien = require("aylien_textapi");
const texapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
