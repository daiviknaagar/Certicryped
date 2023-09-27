import express from 'express';
import {signup, signin} from "../controllers/user.js";
import { getuniversites, updateUniversity} from '../controllers/Universites.js';
const router = express.Router();


// router.post('/signin', signin);
router.get('/', getuniversites);
router.patch('/',updateUniversity )

export default router;