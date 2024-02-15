const {app }= require("./app");
const dotenv = require("dotenv").config()
const OTP = require("./models/OtpModel")
const connectDB = require("./config/connectDB")
try {
    const port = process.env.PORT || 3000
    connectDB(process.env.DB)
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`the server is listening on port ${port}`);
        }) 
    })

    .then(()=>{
        setInterval(()=>{
            const twentyMinutesAgo = new Date(Date.now() - 20 * 60000);
            // Delete OTPs where the expiration date is less than the calculated time
            console.log("deleting expired otps")
            return OTP.deleteMany({ expirationTime: { $lte: twentyMinutesAgo } });
        }, 2000*30*10*2)
    })
} catch (error) {
    console.log("Error ==>", error);
	process.exit(1);
}