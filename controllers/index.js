const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);

module.exports = router;