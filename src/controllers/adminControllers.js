const {admin} = require('../models/');

module.exports = {
    getAllAdmin : (req,res)=>{
        admin.findAll()
        .then((data)=>{
            res.status(200).send({
                msg:"Sucess get all data admin",
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"Failed while get all data admin",
                status:500,
                err
            })
        })
    }
}