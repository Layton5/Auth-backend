require("dotenv").config();
const express = require("express");
const errorHandler = require("./src/middleware/errorHandler");
const router = require("./src/routes");

const createError = require("http-errors");

const app = express();

app.use(express.json());

// register all routes
app.use("/api/v1", router);

// Add the error handling middleware after all routes
app.use(errorHandler);

// welcome route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to user management system",
  });
});

app.use((request, response, next) => {
  next(createError.NotFound());
});

app.set("x-powered-by", false);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log("🚀 Server running on port: " + port);
});
