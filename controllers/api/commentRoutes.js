const router = require('express').Router();
const { Post } = require('../../models');
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postedComment = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (![postedComment]) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
