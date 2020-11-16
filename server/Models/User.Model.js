import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+$/]
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
  },
  dateOfBirth: {
    type: Date,
    required: true
  }
}, {
  timestamps: true,
})

export const User = mongoose.model('User', userSchema)