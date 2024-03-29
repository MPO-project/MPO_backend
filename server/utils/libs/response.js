const{ getReasonPhrase } = require("http-status-codes");

/**
￼ * HTTP success response
￼ * @param res The response object
￼ * @param message The success message
￼ * @param payload The payload 
￼ * @returns ISuccessResponse
￼ */
const successResponse = (res, message, payload, statusCode=200) => {
	return res.status(statusCode).json({
		success: true,
		message,
		payload: {...payload},
	})
}

/**
￼ * HTTP error response
￼ * @param res The response object
￼ * @param message The error message
￼ * @param statusCode Http status code
￼ * @returns IErrorResponse
￼ */
const errorResponse = (res, message, statusCode) => {
	const reason = getReasonPhrase(statusCode)
	return res.status(statusCode).json({
		success: false,
		error: {
			type: reason,
			code: statusCode,
			message: message
		}
	})
}

module.exports = {successResponse, errorResponse}