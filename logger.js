const logger = (req, res, next) => {
  let method = req.method;
  let url = req.url;
  console.log(method, url);
  next();
};
module.exports = { logger };
