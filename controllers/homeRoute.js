const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, Comment, User } = require('../models');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((posts) =>
      posts.get({
        plain: true,
      })
    );
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: 'Post with this ID!' });
      return;
    }
    const post = postData.get({ plain: true });
    console.log(post);
    res.render('viewPost', {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {
    logged_in: req.session.logged_in,
  });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
