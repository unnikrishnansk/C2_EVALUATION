const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        name : {type : String, required : true},
        address : {type : String, required : true},
        IFSC : {type : String, required : true},
        MICR : {type : Number, required : true},
        masteraccountId : {
            type : Number,
            // path : ("masterAccount"),
        }
    },
    {
        timestamps : true,
    },
);

const branch = mongoose.model("branch",branchSchema);

module.exports = branch;