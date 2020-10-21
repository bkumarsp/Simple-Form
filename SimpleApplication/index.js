//inbuilt modules
const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const { AsyncLocalStorage } = require("async_hooks");

//my modules
const {calculateAvg, calculateAge, greetUser} = require('./functions.js')

//required Instances
var upload = multer();
var app = express();
app.use(express.static('css'));

//Server Port
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('first_view.pug');
})

//set view for Pug File (html contents)
app.set('view engine', 'pug');
app.set('views', './views');

//Evaluate Form details (convert data into JSON)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));

//object to collect user info from form submission
var userDetails = {}

//create browser Storage
var myWebStorage = AsyncLocalStorage;

app.post('/', (req, res) => {
    res.redirect('/secondPage');

    userDetails = req.body;

    userDetails.averageMarks = calculateAvg(userDetails);
    userDetails.age = calculateAge(userDetails.birthdate);

    myWebStorage.userData = JSON.stringify(userDetails);    //creates a key:value pair 
});

app.get('/secondPage', (req, res) => {
    var extractInfoFromWebStorage = JSON.parse(myWebStorage.userData);
    // var greetUser = "Hello " + extractInfoFromWebStorage.name + "! , you are " + extractInfoFromWebStorage.age + " years old." + "<hr>Average Marks = " + extractInfoFromWebStorage.averageMarks;
    res.send(greetUser(extractInfoFromWebStorage));
})

console.log("Server running on Port = " + PORT);
app.listen(PORT);