const mongoose = require("mongoose")
const iphoneSchema = mongoose.Schema({
iphone_model: {
    type: String,
    required:true,
    minLength:4,
    maxLength:25
   
},
iphone_Size: String,
iphone_Cost: {
    type:Number,
    required:true,
    min:0,
    max:10000
}
    
})
module.exports = mongoose.model("Iphone",
iphoneSchema)