import { Enrollment } from '../models/enrollment.model.js';

export const enrollment = async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const enrollment = new Enrollment({ userId, courseId });
    await enrollment.save();
    res.status(201).send(enrollment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const enrollmentById = async (req, res) => {
  const { userId } = req.body;
  try {
    const enrollment = await Enrollment.find({userId});
    res.status(201).send(enrollment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
