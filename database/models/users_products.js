'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Products.init({
    selfGranted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users_Products',
  });
  return Users_Products;
};