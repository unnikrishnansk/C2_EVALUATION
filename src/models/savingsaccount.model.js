const mongoose = require("mongoose");

const savingsAccountSchema = new mongoose.Schema(
    {
        accountNumber : {type : Number , required : true , unique : true},
        balance : {type : Number , required : true},
        interestRate : {type : Number , required : true},
    },
    {
        timestamps : true,
    },
);

const savings = mongoose.model("savingsaccount" , avingsAccountSchema);

module.exports = savings;
