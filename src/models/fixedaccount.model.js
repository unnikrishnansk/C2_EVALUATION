const mongoose = require("mongoose");

const fixedaccountSchema = new mongoose.Schema(
    {
        account_number : {type : Number , required : true , unique : true},
        balance : {type : Number , required : true},
        interest_rate : {type : Number , required : true},
        start_date : {type : Number , required : true},
        maturity_date : {type : Number , required : true},
        masteraccountId : {
            type:Number,
        }
    },
    {
        timestamps : true,
    },
);


const fixedaccount = mongoose.model("fixedaccount", fixedaccountSchema);

module.exports = fixedaccountSchema;