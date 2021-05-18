const jwt = require("jsonwebtoken");

module.exports = {
  checkLogin: (req, res, next) => {
    const bearer = req.header("x-access-token");
    if (!bearer) {
      res.status(401).send({
        msg: "Can't Access",
        status: 401,
        error: "You Must Be Logged in",
      });
    } else {
      const token = bearer.split(" ")[1];
      try {
        const deCodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.deCodeToken = deCodedToken;
        next();
      } catch (error) {
        res.status(401).send({
          msg: "Can't Access",
          status: 401,
          error: "Token Invalid",
        });
      }
    }
  },
};
