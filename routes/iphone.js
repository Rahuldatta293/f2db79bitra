var express = require('express');
const iphone_controlers= require('../controllers/iphone');
var router = express.Router();

 // GET request for one costume.
 router.get('/iphone/:id', iphone_controlers.iphone_detail);
 
/* GET home page. */
router.get('/', iphone_controlers.iphone_view_all_Page);

module.exports = router;

