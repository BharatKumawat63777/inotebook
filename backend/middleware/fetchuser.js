var jwt = require("jsonwebtoken");
const JWT_SECRET = "Bharatisabodstudent";

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(402).send({ error: "Please authenticate using a vaild token" });
  }

  try {
    const dat = jwt.verify(token, JWT_SECRET);
    req.user = dat.user;
    next();
  } catch (error) {
    res.send(401).send({error:"Please authenticate using a vaild token"});
  }
};

module.exports = fetchuser;
