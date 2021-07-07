const errorCatcher = (req, res, next) => {
  try {
    next();
  } catch (error) {
    return res.status(500).send(error)
  }
}

module.exports = errorCatcher