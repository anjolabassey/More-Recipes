import express from 'express';

const router = express.Router();

router.use('/recipes/', require('./recipes'));

module.exports = router;
