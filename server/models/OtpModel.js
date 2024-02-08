const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    otp: {
        type: String,
        required:true,
    },
    expirationTime:{
        type:Date,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})
const OTP = mongoose.model("OTP", otpSchema);

module.exports = OTP;