import { Router } from "express";
import {  createUsers , logIn } from '../controllers/user.controller.js';

const router = Router();
router.post('/login' , logIn);
router.post('/' , createUsers);

export default router;