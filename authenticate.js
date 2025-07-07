const authenticate = (req, res, next) => {
  let { user } = req.query;
  if (user === "arjun") {
    req.user = { name: "arjun", id: 1 };
    next();
  } else {
    res.status(401).send("You are Unautherize FUCK You!");
  }
};
module.exports = authenticate;
