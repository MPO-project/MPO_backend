const tryCatch = require("../utils/libs/tryCatch")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const crypto = require("crypto");
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
       return successResponse(res, "user already exists", user, 200)
    }

    else{   
        // res.status(400).send("Email not found");
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
            expirationTime: expiration,
            email:email
        });

        await newOTP.save();
        
        const message=`
            <h1>Your OTP for registration is: ${newOTP.otp}</h1>. <br>It will expire in 5 minutes.
        `
        const subject = "CONFIRMATION OF EMAIL";
        const send_to = email;
        const sent_from = "churabrado@gmail.com";

            await sendEmail(subject, message, send_to, sent_from);
            console.log(newOTP.otp)
            return successResponse(res, "otp", {otp:newOTP.otp}, 200);
    }

})

const verify_otp = tryCatch(async(req,res)=>{
    const {otp, email} = req.body;
//    find the otp and confirm the expiry date
const fiveMinutesAgo = Date.now() - 5 * 150000;
            // Delete OTPs where the expiration date is less than the calculated time
           const matchOtp = await OTP.findOne({ expirationTime: { $gte: fiveMinutesAgo }, email, otp });
            // console.log(matchOtp)
           if (!matchOtp){
                return errorResponse(res, "OTP is invalid or expired", 404)
           }

           else{
            // here we will redirect the user to the sign up page
            // return res.redirect(`${process.env.FRONTEND_URL}/auth/signin/${email}/${otp}`)
            return res.status(200).send("otp verification is successful")
           }
})

const signup = tryCatch(async(req,res)=>{

})
module.exports = {verify_email, verify_otp, signup}