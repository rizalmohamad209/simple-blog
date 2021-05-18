const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/thumbnail");
  },

  filename: (req, file, callback) => {
    const NameFormat = `${Date.now()}-${file.fieldname}${path.extname(
      file.originalname
    )}`;
    callback(null, NameFormat);
  },
});

const upload = multer({
  storage: storage,
  limits: 2 * 1000 * 1000,
});

const singleUpload = (req, res, next) => {
  const uploadThumbnail = upload.single("thumbnail");
  uploadThumbnail(req, res, (err) => {
    if (err) {
      res.status(500).send({
        msg: "Error Multer",
        status: 500,
        err,
      });
    } else {
      next();
    }
  });
};

module.exports = singleUpload;
