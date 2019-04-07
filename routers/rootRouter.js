const { Router } = require('express');
const apiRouter = require('./apiRouter');

const router = Router();

router.use(apiRouter);

module.exports = router;