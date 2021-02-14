function errorHandler(err, req, res, next) {
  const status = 404

  res.status(status).json({
    message: err.message,
  })

  return next()
}

module.exports = errorHandler
