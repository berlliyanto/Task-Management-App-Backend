const user = require('../models/auth.model');
const auth = require('../middlewares/auth.middleware');

async function register(params, callback) {
    const userModel = new user(params);
    userModel.save()
        .then((response) => {
            if (!response) return callback('Gagal');
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

async function login(params, callback) {
    var email = params.email;
    var password = params.password;
    const fetchUser = await user.findOne({ email: email });
    if (email == undefined) {
        return callback("Username atau Email diperlukan");
    } else {
        if (fetchUser != null) {
            if (password == fetchUser.password) {
                console.log("Success Login");
                const token = auth.generateAccessToken(email);
                return callback(null, { ...fetchUser.toJSON(), token });
            } else {
                return callback({
                    message: "Email atau Password Salah"
                })
            }
        } else {
            return callback({
                message: "Email atau Password Salah"
            })
        }
    }
}

async function getUserData(callback) {
    user.find().sort({ _id: -1 })
        .then((response) => {
            if (!response) return callback("Gagal");
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        })
}

async function userProfile(params, callback) {
    user.findOne({ _id: params.id })
        .then((response) => {
            if (!response) return callback("Gagal");
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

async function changePassword(params, callback) {
    user.findOneAndUpdate({ _id: params.id }, {
        $set: {
            password: params.password
        }
    })
        .then((response) => {
            if (!response) return callback("Gagal");
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

module.exports = {
    register,
    login,
    getUserData,
    userProfile,
    changePassword,
}