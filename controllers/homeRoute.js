const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id', 'title', 'post_body', 'date_created', 'user_id'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['username'],
        },
        {
          model: Comment,
          as: 'comment',
          attributes: ['id', 'user_id', 'comment_body'],
        },
      ],
    });

    const posts = postData.map((posts) =>
      posts.get({
        plain: true,
      })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: 'Post with this ID!' });
      return;
    }
    const post = postData.get({ plain: true });
    res.render('post', post);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  });

router.get('/dashboard', (req, res)={
    if (req.session.user_id){

    }
})
