const authRoutes = require("../routes/authRoutes");
// const taskRoutes = require("../routes/taskRoutes"); 

module.exports = (app) => {
  // Mount the Auth routes
  // Endpoint becomes: http://localhost:5000/api/auth/register-personal
  app.use("/api/auth", authRoutes);
  
  // app.use("/api/tasks", taskRoutes);
};