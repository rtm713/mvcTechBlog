const router = require('express').Router();
const withAuth = require('../utils/helpers');

router.get('/', withAuth, async (req, res) => {
    res.render('dashboard');
});

router.get('/createpost', withAuth, async (req, res) => {
    res.render('createpost');
});

module.exports = router;