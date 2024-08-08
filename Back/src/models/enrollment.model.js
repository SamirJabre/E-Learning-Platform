import mongoose, { Schema } from 'mongoose';

const enrollmentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'courses' },
  enrollmentDate: { type: Date, default: Date.now },
});

export const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
