const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.trek.get);

router.get('/detail/:id', controllers.trek.detail);

router.post('/', auth(), controllers.trek.post);

router.put('/:id', auth(), controllers.trek.put);

router.delete('/:id', auth(), controllers.trek.delete);

module.exports = router;