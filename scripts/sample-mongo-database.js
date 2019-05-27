/**
 *  MONGO DB SAMPLE DATABASE
 *  Run this script to load sample data into our db
 *  $ node scripts/sample-mongo-database.js
**/

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);

  const fluffy = new Kitten({ name: 'Fluffy' });
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log(fluffy)
  });

});
