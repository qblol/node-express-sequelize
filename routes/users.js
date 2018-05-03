const express = require('express');
const users = require('../controllers/users');

const router = express.Router();

/* GET users listing. */
router.get('/', users.list);
// router.post('/', users.register);
// router.post('/login', users.login);
// router.put('/:userId', users.edit);
// router.delete('/:userId', users.delete);

module.exports = router;
