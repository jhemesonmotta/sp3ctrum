const mongodb = "mongodb://localhost/spectrum";
var mongoose = require('mongoose');
mongoose.connect(mongodb, {
    useMongoClient: true
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '));
