const errorHandler = (err, request, response, next) => {
  let erroStatus = err.status || 500;
  let errors = [
    {
      msg: err.message || "An error occured!",
    },
  ];
  if (err.name === "UnauthorizedError" || err.name === "JsonWebTokenError") {
    erroStatus = 401;
    errors = [
      {
        msg: err.message || "User token error",
      },
    ];
  }
  response.status(erroStatus).json({
    status: erroStatus,
    errors,
  });
  return;
};

module.exports = errorHandler;
