const mongoose = require("mongoose")
const iphoneSchema = mongoose.Schema({
iphone_model: String,
iphone_Size: String,
iphone_Cost: Number
})
module.exports = mongoose.model("Iphone",
iphoneSchema)