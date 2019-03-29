const { NotFoundError } = require('../helpers/CustomError')

module.exports = {
  handle404Error: (req, res, next) => {
    next(NotFoundError.get('Route not found'))
  },

  handleErrors: (err, req, res, next) => {
    res.status(err.statusCode || 500).json(err.message)
  }
}
