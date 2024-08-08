import { Course } from '../models/course.model.js';

export const getCourseById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const course = await Course.findById(id);
      if (!course) {
        return res.status(404).send('Course not found');
      }
      res.status(200).send(course);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
}