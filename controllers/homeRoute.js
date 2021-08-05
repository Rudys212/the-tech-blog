const router = require('express').Router();
const { Post, Comment, User } = require('../models');
// const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
  console.log('check');
  try {
    const postData = await Post.findAll({
      //   attributes: ['id', 'title', 'post_body', 'date_created', 'user_id'],
      //   include: [
      //     {
      //       model: User,
      //       as: 'user',
      //       attributes: ['username'],
      //     },
      //     {
      //       model: Comment,
      //       as: 'comment',
      //       attributes: ['id', 'user_id', 'comment_body'],
      //     },
      //   ],
    });

    //   .then((postData) => {
    const posts = postData.map((posts) =>
      posts.get({
        plain: true,
      })
    );
    console.log(posts);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
