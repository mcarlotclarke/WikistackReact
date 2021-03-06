const router = require('express').Router();
const { Page, User } = require('../db'); // remember that tricky thing that happened with import, must import index.js

// all pages
router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.json(pages);
  } catch (err) {
    next(err);
  }
});

router.get('/search', async (req, res, next) => {
  try {
    const pages = await Page.findByTag(req.query.search);
    res.json(pages);
  } catch (err) {
    next(err);
  }
});

// one page by slug
router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      },
      include: [{ model: User, as: 'author' }]
    });
    if (page === null) {
      res.sendStatus(404);
    } else {
      res.json(page);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:slug', async (req, res, next) => {
  try {
    await Page.destroy({
      where: {
        slug: req.params.slug
      }
    });
    res.send('Deleted');
  } catch (err) {
    next(err);
  }
});

// shouldn't this be router.delete
// router.get('/:slug/delete', async (req, res, next) => {
//   try {
//     await Page.destroy({
//       where: {
//         slug: req.params.slug
//       }
//     });
//     res.send('Deleted');
//   } catch (err) {
//     next(err);
//   }
// });

// can I use this route?
router.get('/:slug/edit', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });

    if (page === null) {
      res.sendStatus(404);
    } else {
      const author = await page.getAuthor();
      res.json(page, author);
    }
  } catch (err) {
    next(err);
  }
});

// router.get('/:slug/similar', async (req, res, next) => {
//   try {
//     const page = await Page.findOne({
//       where: {
//         slug: req.params.slug
//       }
//     });

//     if (page === null) {
//       res.sendStatus(404);
//     } else {
//       const similar = await page.findSimilar();
//       res.json(similar);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

// adds a page
router.post('/', async (req, res, next) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email
      }
    });
    const newPage = await Page.create(req.body);
    newPage.setAuthor(user);
    res.status(201).json(newPage);
  } catch (err) {
    next(err);
  }
});

// updates a page
router.put('/:slug', async (req, res, next) => {
  try {
    // const [success, update]
    const [numUpdated, [updatedPage]] = await Page.update(req.body, {
      where: {
        slug: req.params.slug
      },
      returning: true
    });
    res.json(updatedPage);
  } catch (err) {
    next(err);
  }
});

// router.put('/:slug', async (req, res, next) => {
//   try {
//     const slug = await Page.findOne({
//       where: {
//         slug: req.params.slug
//       },
//       include: [{ model: User, as: 'author' }]
//     });
//     if (slug) {
//       const update = await Page.update(req.body, {
//         where: {
//           slug: req.params.slug
//         },
//         returning: true
//       });
//       res.json(update);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
