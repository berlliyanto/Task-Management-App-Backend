const taskService = require('../services/task.service');


exports.addTask = (req, res, next)=>{
    var model = {
        owner: req.body.owner,
        title: req.body.title,
        category: req.body.category,
        tenggatWaktu: req.body.tenggatWaktu,
        waktuSelesai: req.body.waktuSelesai
    }

    taskService.addTask(model, (error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses",
                data: result,
            })
        }
    })
}

exports.getTaskUser = (req, res, next)=>{
    var model = {
        id: req.params.id
    }
    taskService.getTaskUser(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message:"Sukses",
                data: result,
            })
        }
    });
}

exports.updateTaskUser = (req, res, next) =>{
    var model = {
        id: req.params.id,
        owner: req.body.owner,
        completed: req.body.completed,
        waktuSelesai: req.body.waktuSelesai
    }
    taskService.updateTaskUser(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses",
                data: result,
            })
        }
    })
}