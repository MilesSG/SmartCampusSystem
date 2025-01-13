const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    required: true, 
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  name: { type: String, required: true },
  studentId: { type: String, sparse: true },
  teacherId: { type: String, sparse: true },
  department: { type: String },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date }
});

module.exports = mongoose.model('User', userSchema); 