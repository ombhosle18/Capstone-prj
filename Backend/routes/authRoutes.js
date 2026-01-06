const express = require("express");
const router = express.Router();

const {
  registerEducation,
  registerIndustry,
  registerPersonal,
  login
} = require("../controllers/authController");

// SIGN UP ROUTES
<<<<<<< HEAD
// Changed from "/register/education" to "/register-education" to match Frontend
router.post("/register-education", registerEducation);
router.post("/register-industry", registerIndustry);
router.post("/register-personal", registerPersonal);
=======
router.post("/register/education", registerEducation);
router.post("/register/industry", registerIndustry);
router.post("/register/personal", registerPersonal);
>>>>>>> eab20255f2dc0cc70871281308f66b5fb0e1c5b0

// LOGIN
router.post("/login", login);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> eab20255f2dc0cc70871281308f66b5fb0e1c5b0
