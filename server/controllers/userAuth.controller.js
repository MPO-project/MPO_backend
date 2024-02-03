const tryCatch = require("../utils/libs/tryCatch")
const User = require ("../models/userModel");
const { errorResponse, successResponse } = require("../utils/libs/response");


const register = tryCatch(async (req, res)=>{
   const {email} = req.body;
    const user = await User.findOne({email});

    if (user){
        successResponse(res,"email found in database please login", {}, 200 )
    }

    else{
        console.log("not found in database")
        return errorResponse(res,"user not found, create an account",404)
    }

})

module.exports = {register}