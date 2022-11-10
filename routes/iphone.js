var express = require('express');
const iphone_controlers= require('../controllers/iphone');
var router = express.Router();

/* GET home page. */
router.get('/', iphone_controlers.iphone_view_all_Page);

module.exports = router;

