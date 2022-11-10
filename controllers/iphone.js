var iphone = require('../models/iphone');

// List of all iphone
exports.iphone_list = async function(req, res) {
    try{
    theIphones = await iphone.find();
    res.send(theIphones);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// List of all iphones
//exports.iphone_list = function(req, res) {
//res.send('NOT IMPLEMENTED: iphone list');
//};
// for a specific iphone.
exports.iphone_detail = function(req, res) {
res.send('NOT IMPLEMENTED: iphone detail: ' + req.params.id);
};
// Handle iphone create on POST.
exports.iphone_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: iphone create POST');
};
// Handle iphone delete form on DELETE.
exports.iphone_delete = function(req, res) {
res.send('NOT IMPLEMENTED: iphone delete DELETE ' + req.params.id);
};
// Handle iphone update form on PUT.
exports.iphone_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: iphone update PUT' + req.params.id);
};