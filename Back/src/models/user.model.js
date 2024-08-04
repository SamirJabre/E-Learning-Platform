import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {required: true , type: 'string'},
    email: {required: true, type: 'string' , unique:true},
    password: {required: true, type: 'string'},
    role: {type: 'string', default: 'student'},
});

export const User = mongoose.model('User', userSchema);