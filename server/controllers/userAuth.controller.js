const tryCatch = require("../utils/libs/tryCatch")
const User = require ("../models/userModel");
const { errorResponse, successResponse } = require("../utils/libs/response");
const speakeasy= require("speakeasy");
const OTP = require("../models/OtpModel")
const sendEmail = require("../utils/libs/email.helper")


const verify_email = tryCatch(async (req, res)=>{
   const {email} = req.body;
   console.log(email)
    const user = await User.findOne({email});

    if (user){
       res.redirect(`${process.env.FRONTEND_URL}/login`)
    }

    else{   
        //generate otp
        const generatedOTP = speakeasy.totp({
            secret: speakeasy.generateSecret().base32,
            encoding: "base32",
          });

        // set OTP expiration  
        const expiration = new Date();
        expiration.setMinutes(expiration.getMinutes() + 5);

        // add the new otp to the database

        const newOTP = new OTP({
            otp: generatedOTP,
            expirationTime: expiration
        });

        await newOTP.save();
        
        const message=`
            <h1>Your OTP for registration is: ${newOTP.otp}</h1>. <br>It will expire in 5 minutes.
        `
        const subject = "CONFIRMATION OF EMAIL";
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;

            await sendEmail(subject, message, send_to, sent_from);
            // return res.redirect(`${process.env.FRONTEND_URL}/signup`);
            return res.json({message:"success"})
    }

})

module.exports = {verify_email}