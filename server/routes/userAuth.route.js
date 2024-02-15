const {verify_email, verify_otp } = require("../controllers/userAuth.controller");
const authRoutingFunction =  (router) => {
  router.post("/users/verify-email", verify_email);
  router.post("/users/verify-otp", verify_otp);
//   router.post("/users/verifyEmail", verifyEmail);
//   router.post("/users/resendEmailVerification", resendEmailVerification);
//   router.post("/users/login", login);
//   router.post("/users/forgotPassword", forgotpassword);
//   router.post("/users/verifyPasswordOtp", verifyPasswordOtp);
//   router.post("/users/:user_id/resetPassword", resetPassword);

};
module.exports = {authRoutingFunction};