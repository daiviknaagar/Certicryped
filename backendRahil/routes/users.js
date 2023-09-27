import express from 'express';
import {signup, signin} from "../controllers/user.js";
const router = express.Router();

// router.post('/signin', signin);
router.post('/UniversitySignup', signup);
router.post('/UniversitySignIn', signin);

export default router;