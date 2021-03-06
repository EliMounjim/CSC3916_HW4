var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

//mongoose.connect(process.env.DB, { useNewUrlParser: true });
try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
mongoose.set('useCreateIndex', true);

// movie schema, all fields are required and actors is an array of strings
var MovieSchema = new Schema({
    Title: {type: String, required: true, index: {unique: true}, trim: true},
    YearReleased: {type: Number, required: true, trim: true},
    Genre: {type: String, required: true, trim: true},
    Actors:  {type: Array, default: []},
    ImageUrl: {type: String, required: true}
});


module.exports = mongoose.model('Movie', MovieSchema);