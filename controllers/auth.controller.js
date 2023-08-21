const authService = require('../services/auth.service');

exports.register = (req, res, next)=>{
    var model = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
    }
    authService.register(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses Register",
                data: result
            });
        }
    });
}

exports.login = (req, res, next)=>{
    var model = {
        email: req.body.email,
        password: req.body.password
    }
    authService.login(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses Login",
                data: result
            });
        }
    });
}

exports.getUserData = (req, res, next)=>{
    authService.getUserData((error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses Ambil Data User",
                data: result
            });
        }
    });
}

exports.userProfile = (req, res, next)=>{
    var model = {
        id: req.params.id
    }
    authService.userProfile(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses Ambil Data User",
                data: result
            });
        }
    });
}

exports.changePassword = (req, res, next) =>{
    var model = {
        id: req.params.id,
        password: req.body.password,
    }
    authService.changePassword(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses Ambil Data User",
                data: result
            });
        }
    })
}