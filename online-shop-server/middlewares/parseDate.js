module.exports = (req, res, next) => {
  if (req.query && req.query.date) {
    res.locals.date = new Date(req.query.date);
  }
  next();
};
