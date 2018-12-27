const router = require('express').Router();

// match your requests to the correct file in api/
router.use('/wiki', require('./wiki'));
router.use('/users', require('./users'));

// 404 handler
router.use(function(req, res, next) {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = router;
