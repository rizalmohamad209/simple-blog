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
    },
    postBlog : (req,res)=>{
        let {body } = req
        blog.create(body)
        .then((data)=>{
            res.status(200).send({
                msg:"Success Post data blog",
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"Failed while post data",
                status:500,
                err
            })
        })
    },
    deleteBlog:(req,res)=>{
        let {id} = req.params;
        blog.destroy({
            where : {id}
        })
        .then((data)=>{
            res.status(200).send({
                msg:"Success delete data blog",
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg:"Failed while delete data blog",
                status:500,
                err
            })
        })
    }
}