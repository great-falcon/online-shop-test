class CustomError extends Error {
  constructor (status, name) {
    super()
    Error.captureStackTrace(this, CustomError)
    this.statusCode = status
    this.name = name
  }

  throw (message) {
    throw this.setMessage(message)
  }

  get (message) {
    return this.setMessage(message)
  }

  setMessage (message) {
    this.message = message || this.name
    return this
  }
}

const BadRequestError = new CustomError(400, 'Bad Request')
const UnauthorizedError = new CustomError(401, 'Unauthorized')
const NotFoundError = new CustomError(404, 'Not Found')
const UnprocessableEntityError = new CustomError(422, 'Unprocessable Entity')
const ServerError = new CustomError(500, 'Internal Server Error')

module.exports = { BadRequestError, UnauthorizedError, NotFoundError, UnprocessableEntityError, ServerError }
