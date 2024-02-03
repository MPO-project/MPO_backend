const mongoose = require("mongoose");

const connectDB = async()=>{
    
    await mongoose.connect(process.env.DB);
    console.log("connected to MPO database");
}
// connectDB();
module.exports = connectDB;