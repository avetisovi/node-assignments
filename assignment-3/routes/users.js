import { Router } from 'express';
import path from 'path';
import {rootDir} from "../constants/index.js";

const router = Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
})

export default router;