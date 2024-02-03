const {register } = require("../controllers/userAuth.controller");
const authRoutingFunction =  (router) => {
  router.post("/users/signUp", register);
//   router.post("/users/verifyEmail", verifyEmail);
//   router.post("/users/resendEmailVerification", resendEmailVerification);
//   router.post("/users/login", login);
//   router.post("/users/forgotPassword", forgotpassword);
//   router.post("/users/verifyPasswordOtp", verifyPasswordOtp);
//   router.post("/users/:user_id/resetPassword", resetPassword);

};
module.exports = {authRoutingFunction};