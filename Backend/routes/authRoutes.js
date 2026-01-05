const express = require("express");
const router = express.Router();

const {
  registerEducation,
  registerIndustry,
  registerPersonal,
  login
} = require("../controllers/authController");

// SIGN UP ROUTES
router.post("/register/education", registerEducation);
router.post("/register/industry", registerIndustry);
router.post("/register/personal", registerPersonal);

// LOGIN
router.post("/login", login);

module.exports = router;
