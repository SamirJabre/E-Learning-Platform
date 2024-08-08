import mongoose, { Schema } from 'mongoose';

const courseSchema = new Schema({
    title: {required: true , type: 'string' , unique:true},
    description: {required: true, type: 'string'},
    instructor: {required: true, type: 'string'},
    schedule: {type: 'string'},
});

export const Course = mongoose.model('Course', courseSchema);