const tryCatch = require("../utils/libs/tryCatch")
const User = require ("../models/userModel");
const { errorResponse, successResponse } = require("../utils/libs/response");


const register = tryCatch(async (req, res)=>{
   const {email} = req.body;
   console.log(email)
    const user = await User.findOne({email});

    if (user){
         // Email exists, redirect to login page
        res.redirect(`http://localhost:3000/login`);
    }

    else{
        res.redirect(`http://localhost:3000/signup`);
    }

})

module.exports = {register}