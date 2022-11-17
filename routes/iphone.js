var express = require('express');
const iphone_controlers= require('../controllers/iphone');
var router = express.Router();

 // GET request for one costume.
 router.get('/iphone/:id', iphone_controlers.iphone_detail);
 
/* GET home page. */
router.get('/', iphone_controlers.iphone_view_all_Page);

/* GET detail costume page */
router.get('/detail', iphone_controlers.iphone_view_one_Page);

/* GET create costume page */
router.get('/create', iphone_controlers.iphone_create_Page);

/* GET create update page */
router.get('/update', iphone_controlers.iphone_update_Page);

/* GET delete costume page */
router.get('/delete', iphone_controlers.iphone_delete_Page);

module.exports = router;

