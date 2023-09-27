import express from 'express';
import {signup, signin} from "../controllers/OwnerUser.js";
const router = express.Router();

// router.post('/signin', signin);
router.post('/OwnerSignUp', signup);
router.post('/OwnerSignIn', signin);

export default router;