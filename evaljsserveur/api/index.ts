import express from 'express';
import questions from './routes/questions';
import mesannonces from './routes/mesannonces';
const router = express.Router();
router.use('/questions', questions);
router.use('/mesannonces', mesannonces);
router.use('/', questions);

export default router;