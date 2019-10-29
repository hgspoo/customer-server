const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize the app
const app = express();

// Setup server port
const port = process.env.PORT || 8000;

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/customers', { useNewUrlParser: true });
var db = mongoose.connection;

// Added check for DB connection
if (!db) {
  console.log('Error connecting db');
} else {
  console.log('Db connected successfully');
}

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', require('./routes'));

// Launch app to listen to specified port
app.listen(port, function() {
  console.log('Running server on port ' + port);
});
