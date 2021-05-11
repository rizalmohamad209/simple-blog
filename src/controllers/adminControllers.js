const {admin, Sequelize} = require("../models/")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const op = Sequelize.Op

module.exports = {
    signUp :(req,res)=>{
        const {body} = req
        const saltRounds = 10

        body.password = bcrypt.hashSync(body.password, saltRounds)

        admin.create(body)
        .then((data)=>{
            res.status(200).send({
                msg:"Success Signup",
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"Failed Signup",
                status:500,
                err
            })
        })
    },
    signIn : (req,res)=>{
        const {body} = req
    }
}