const express = require("express");

const user = require("../models/user.model");

const router = express.router();

module.exports = router.post("", (req,res) => {
    try{
        const x = model.create();
        return res.status(200).send(x);
    }
    catch(err)
    {
        return res.status(500).send({message : err.message});
    }
    
});

