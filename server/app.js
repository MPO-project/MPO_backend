const express =  require ("express");
const app =  express();
const cors = require("cors")
const { errorResponse, successResponse } = require ("./utils/libs/response.js");
// get routes
const routes = require ("./routes/index.js");
const { StatusCodes } =  require("http-status-codes");
const bodyParser = require("body-parser")

// setup middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser())


// mount route
app.use("/v1", routes)

// index route
app.get("/", (req, res) => {
	return successResponse(res, "Welcome to MPO Backend service 🚀");
})

// handle 404 routes
app.all("*", async(req, res, next) => {
	return errorResponse(res, `Resource ${req.originalUrl} does not exist`, StatusCodes.NOT_FOUND)
})

// handle global error 
app.use((error, req, res, next) => {
	const message = (process.env.NODE_ENV === "development") ? error.message : "something went wrong";
	return errorResponse(res, message, StatusCodes.INTERNAL_SERVER_ERROR);
})

module.exports = {app}