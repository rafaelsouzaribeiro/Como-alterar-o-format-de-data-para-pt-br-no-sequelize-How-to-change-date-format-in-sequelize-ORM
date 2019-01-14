
const express = require('express');
const app = express();
const port = process.env.PORT || 8042;


// routes ======================================================================
require('./config/routes.js')(app); // load our routes and pass in our app and fully configured passport

//Models
const models = require("./app/models/index.js");

 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


exports = module.exports = app;