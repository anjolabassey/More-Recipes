import express from 'express';
import recipe from './recipes';

const router = express.Router();

router.use('/recipes', recipe);

export default router;
