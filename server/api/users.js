const router = require('express').Router();
const User = require('../db/models/user');
const Page = require('../db/models/page');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const pages = await Page.findAll({
      where: {
        authorId: req.params.userId
      }
    });
    res.json(user, pages);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
