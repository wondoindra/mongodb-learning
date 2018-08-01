const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nama: String,
    email: String,
    batch: String,
    tahun: String
});

const User = mongoose.model("User", userSchema);
module.exports.User = User;