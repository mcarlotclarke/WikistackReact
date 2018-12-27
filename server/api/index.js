const router = require('express').Router();

// match your requests to the correct file in api/
// router.use('/modelName', require('./modelNameFile')); // TODO make sure to change to the correct file and path

// 404 handler
router.use(function(req, res, next) {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = router;
