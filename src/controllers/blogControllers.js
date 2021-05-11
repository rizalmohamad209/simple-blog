const {blog} = require('../models/');

module.exports = {
    getAllBlog : (req,res) =>{
        blog.findAll()
        .then((data)=>{
            res.status(200).send({
                msg: "Success get all data blog",
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"Failed while get all data blog",
                status:500,
                err
            })
        })
}
}