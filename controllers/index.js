const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute');
const dashboardRoute = require('./dashboardRoutes');

router.use('/dashboard', dashboardRoute);
router.use('/', homeRoute);
router.use('/api', apiRoutes);

module.exports = router;
