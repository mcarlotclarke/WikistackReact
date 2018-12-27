const router = require('express').Router();
const Page = require('../db/models/page');
// const User = require('../db/models/user');

router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.json(pages);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
