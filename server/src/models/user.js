const mongoose = require('mongoose')
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    fullName: String, // String is shorthand for {type: String}
    email: String,
    phoneNumber: { type: String, unique: true, required: true },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User