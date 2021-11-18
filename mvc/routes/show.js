const express = require('express');
const showController = require('../controllers/ShowController');
const router = express.Router();

router.get('/create',showController.create );
router.post('/store',showController.store );
router.get('/:idStudent',showController.show );
router.get('/',showController.index );



module.exports = router;