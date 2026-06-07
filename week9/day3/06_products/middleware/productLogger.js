function productLogger(req, res, next) {
  console.log(`[PRODUCTS] ${req.method} ${req.originalUrl}`);

  next();
}

module.exports = productLogger;
