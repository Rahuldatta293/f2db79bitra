var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var iphone_controller = require('../controllers/iphone');
const iphone = require('../models/iphone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// IPHONE ROUTES ///
// POST request for creating a iphone.
router.post('/iphones', iphone_controller.iphone_create_post);
// DELETE request to delete iphone.
router.delete('/iphones/:id', iphone_controller.iphone_delete);
// PUT request to update iphone.
router.put('/iphones/:id', iphone_controller.iphone_update_put);
// GET request for one iphone.
router.get('/iphones/:id', iphone_controller.iphone_detail);
// GET request for list of all iphone items.
router.get('/iphones', iphone_controller.iphone_list);
module.exports = router;

// Handle iphone update form on PUT.
exports.iphone_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await iphone.findById( req.params.id)
// Do updates of properties
if(req.body.iphone_type)
toUpdate.iphone_type = req.body.iphone_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
