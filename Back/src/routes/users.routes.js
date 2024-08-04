import { Router } from "express";
import { getAllUsers , createUsers , updateUsers , deleteUsers} from '../controllers/users.controller.js';

const router = Router();
router.get('/' , getAllUsers);
router.post('/' , createUsers);
router.put('/:id' , updateUsers);
router.delete('/:id' , deleteUsers);

export default router;