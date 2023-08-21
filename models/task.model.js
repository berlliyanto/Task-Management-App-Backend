const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    category: { type: String },
    tenggatWaktu: { type: Date },
    waktuSelesai: { type: Date }, 
  });
  
  const Task = mongoose.model('Task', taskSchema);
  
  module.exports = Task;