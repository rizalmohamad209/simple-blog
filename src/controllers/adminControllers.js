const { admin, Sequelize } = require("../models/");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const op = Sequelize.Op;

module.exports = {
  signUp: (req, res) => {
    const { body } = req;
    const saltRounds = 10;

    body.password = bcrypt.hashSync(body.password, saltRounds);

    admin
      .create(body)
      .then((data) => {
        res.status(200).send({
          msg: "Success Signup",
          status: 200,
          data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Failed Signup",
          status: 500,
          err,
        });
      });
  },
  signIn: async (req, res) => {
    const { body } = req;
    let findAdmin = await admin.findOne({
      where: {
        [op.or]: [{ username: body.username }, { email: body.username }],
      },
    });
    if (!findAdmin) {
      res.status(404).send({
        msg: "Sign-in error",
        status: 404,
        error: "User not found",
      });
    }
    const isValidPassword = bcrypt.compareSync(
      body.password,
      findAdmin.dataValues.password
    );

    if (!isValidPassword) {
      res.status(403).send({
        msg: "Sign-in error",
        status: 403,
        error: "Password is invalid",
      });
    }
    const payload = {
      id: findAdmin.dataValues.id,
      username: findAdmin.dataValues.username,
      email: findAdmin.dataValues.email,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 86400,
    });
    delete findAdmin.dataValues.password;
    res.status(200).send({
      msg: "Sign-in Success",
      status: 200,
      data: { ...findAdmin.dataValues, token },
    });
  },
};
