const Task  = require('../models/task.model');

async function addTask(params,callback){
    const taskModel = new Task(params);
    taskModel.save()
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    })
}

async function getTaskUser(params,callback){
    try {
        if(params.id != null || params.id != undefined){
            Task.find(
                {
                    owner: params.id
                }
            )
            .then((response)=>{
                if(!response) return callback("Gagal");
                return callback(null,response);
            })
            .catch((error)=>{
                return callback(error);
            })
        }else{
            return callback('id required');
        }
    } catch (error) {
        return callback(error);
    }
}

async function updateTaskUser(params, callback){
    Task.findOneAndUpdate({
        $and:[
            {owner: params.owner},
            {_id: params.id}
        ]
    }, {
        $set:{
            completed: params.completed,
            waktuSelesai: params.waktuSelesai
        }
    })
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null, response);
    })
    .catch((error)=>{
        return callback(error);
    })
}

module.exports = {
    addTask,
    getTaskUser,
    updateTaskUser,
}