"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      blog.belongsTo(models.admin, {
        foreignKey: "author",
        as: "authors",
      });
    }
  }
  blog.init(
    {
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      content: DataTypes.STRING,
      author: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "blog",
    }
  );
  return blog;
};
