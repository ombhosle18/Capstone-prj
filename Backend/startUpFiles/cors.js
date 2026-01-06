// Backend/startUpFiles/cors.js
const cors = require("cors");

module.exports = (app) => {
  // Allow requests from your Frontend URL (e.g., http://localhost:5173)
  app.use(cors({
    origin: "http://localhost:5173", // Make sure this matches your Frontend port!
    credentials: true
  }));
};