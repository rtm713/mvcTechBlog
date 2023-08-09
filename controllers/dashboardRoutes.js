const router = require('express').Router();
const withAuth = require('../utils/helpers');

router.get('/', withAuth, async (req, res) => {
    res.render('dashboard');
})

module.exports = router;