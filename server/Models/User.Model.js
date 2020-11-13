import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    lowercase: true, 
    unique: true, 
    required: [true, "email can't be blank"], 
    match: [/\S+@\S+\.\S+/, 'is invalid'], 
    index: true
  }
}, {
  timestamps: true,
})

export const User = mongoose.model('User', userSchema)