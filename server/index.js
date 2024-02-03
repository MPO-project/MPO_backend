const {app }= require("./app");
const dotenv = require("dotenv").config()
const connectDB = require("./config/connectDB")
try {
    const port = process.env.PORT || 3000
    connectDB(process.env.DB)
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`the server is listening on port ${port}`);
        }) 
    })
} catch (error) {
    console.log("Error ==>", error);
	process.exit(1);
}