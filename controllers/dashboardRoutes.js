const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/helpers');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Post }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('dashboard', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/createpost', withAuth, async (req, res) => {
    res.render('createpost');
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
         model: Comment,
            include:{   
              model: User,
              attributes: ['username'],
            }
          }
        ]
      });

      if(!postData){
        res.status(404).json({message:"No Post with that id" })
      }
  
      const post = postData.get({ plain: true });
  
      res.render('editpost', {
        ...post,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;