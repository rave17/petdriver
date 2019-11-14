const MongoCli = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const port = 'mongodb://localhost/petDriver';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(port, config) 
    .then(db => console.log('Server on port '+db))
    .catch(err => console.log('Error on server '+err))
