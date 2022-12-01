var express = require('express');
const iphone_controlers= require('../controllers/iphone');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

 // GET request for one costume.
 router.get('/iphone/:id', iphone_controlers.iphone_detail);
 
/* GET home page. */
router.get('/', iphone_controlers.iphone_view_all_Page);

/* GET detail iphone page */
router.get('/detail', iphone_controlers.iphone_view_one_Page);

/* GET create iphone page */
router.get('/create', iphone_controlers.iphone_create_Page);

/* GET create update page */
router.get('/update',secured, iphone_controlers.iphone_update_Page);

/* GET delete iphone page */
router.get('/delete',secured, iphone_controlers.iphone_delete_Page);

/* GET update iphone page */ 
router.get('/update',secured, iphone_controlers.iphone_update_Page);


module.exports = router;

