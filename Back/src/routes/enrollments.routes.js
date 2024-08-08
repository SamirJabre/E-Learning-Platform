import { Router } from "express";
import {  enrollment ,enrollmentById } from '../controllers/enrollment.contoller.js';

const router = Router();
router.post('/' , enrollment);
router.post('/enrollmentbyid' , enrollmentById);

export default router;