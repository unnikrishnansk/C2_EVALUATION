const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema(
    {
        balance : {type : Number, required : true},
        userId : {
            type : Number,
        },
        branchId : {
            type:Number,
        }
    },
    {
        timestamps: true,
    },
);

const masterAccount = mongoose.model("masterAccount" , masterAccountSchema);

module.exports = masterAccount;