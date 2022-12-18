const express = require('express');

const router = express.Router();

router.get('/', (req, resp, next) => {
  resp.status(404).render('404');
});

module.exports = router;
