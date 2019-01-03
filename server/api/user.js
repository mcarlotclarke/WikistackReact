const router = require('express').Router();
const { User, Page } = require('../db'); // must import index.js

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// router.get('/:userId', async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     console.log('USER', user);
//     const pages = await Page.findAll({
//       where: {
//         authorId: req.params.userId
//       }
//     });
//     console.log('HERE ARE THE PAGES', pages);
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId, {
      include: [{ model: Page }]
    });
    // const pages = await Page.findAll({
    //   where: {
    //     authorId: req.params.userId
    //   }
    // });
    res.json(user);
    console.log(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
