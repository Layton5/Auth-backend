const sendSuccess = (res, data) => {
  res.status(200).json({
    status: "success",
    data,
  });
  return
};

module.exports = sendSuccess;
