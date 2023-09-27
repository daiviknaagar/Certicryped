import express from 'express';
import {signin} from "../controllers/GranteeUser.js";
const router = express.Router();

router.post('/GranteeSignIn', signin);

export default router;