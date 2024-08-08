import { Router } from "express";
import {  getCourseById , getAllCourses} from '../controllers/course.controller.js';

const router = Router();
router.get('/:id' , getCourseById);
router.get('/' , getAllCourses);

export default router;