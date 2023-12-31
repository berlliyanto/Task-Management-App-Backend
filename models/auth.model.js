const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;
