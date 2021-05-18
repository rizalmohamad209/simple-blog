const { blog, admin } = require("../models/");

module.exports = {
  getAllBlog: (req, res) => {
    blog
      .findAll({
        include: [
          {
            model: admin,
            as: "authors",
            attributes: ["name"],
          },
        ],
      })
      .then((data) => {
        res.status(200).send({
          msg: "Success get all data blog",
          status: 200,
          data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Failed while get all data blog",
          status: 500,
          err,
        });
      });
  },
  getBlogById: (req, res) => {
    let { id } = req.params;
    blog
      .findOne({
        where: { id },
      })
      .then((data) => {
        res.status(200).send({
          msg: "Succes get blog by id",
          status: 200,
          data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Failed while get blog by id",
          status: 500,
          err,
        });
      });
  },
  postBlog: (req, res) => {
    let { body } = req;

    const newData = {
      ...body,
      thumbnail: req.image.url,
    };
    blog
      .create(newData)
      .then((data) => {
        res.status(200).send({
          msg: "Success Post data blog",
          status: 200,
          data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Failed while post data",
          status: 500,
          err,
        });
      });
  },
  deleteBlog: async (req, res) => {
    let { id } = req.params;

    let dataBlog = await blog.findOne({
      where: { id },
    });

    if (dataBlog === null) {
      res.status(404).send({
        msg: "Delete data error",
        status: 404,
        error: "Data not found",
      });
    }

    blog
      .destroy({
        where: { id },
      })
      .then((data) => {
        res.status(200).send({
          msg: "Success delete data blog",
          status: 200,
          data: dataBlog,
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Failed while delete data blog",
          status: 500,
          err,
        });
      });
  },
  editBlog: async (req, res) => {
    let { body } = req;
    let { id } = req.params;

    let findBlog = await blog.findOne({
      where: { id },
    });

    if (findBlog === null) {
      res.status(404).send({
        msg: "Edit data error",
        status: 404,
        error: "data not found",
      });
    }

    console.log(body);
    // console.log(req.file);

    const newData = {
      ...body,
      thumbnail: req.image.url,
    };
    blog
      .update(newData, {
        where: { id },
      })
      .then((data) => {
        const resObject = { ...findBlog.dataValues, ...newData };
        res.status(200).send({
          msg: "Success edit data",
          status: 200,
          data: resObject,
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Failed While edit data",
          status: 500,
          err,
        });
      });
  },
};
