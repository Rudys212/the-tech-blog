const router = require('express').Router();
const commentRoute = require('./commentRoute');
const postRoute = require('./postRoute');
// const userRoute = require('./userRoute');

router.use('/commentRoute', commentRoute);
router.use('/postRoute', postRoute);
// router.use('/userRoute', userRoute);

module.exports = router;
