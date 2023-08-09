const router = require('express').Router();

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    };

    res.render('signup');
});

module.exports = router;