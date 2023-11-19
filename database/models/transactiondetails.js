'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionDetails.belongsTo(models.Transactions),
      TransactionDetails.belongsTo(models.Products)
    }
  }
  TransactionDetails.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subTotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'TransactionDetails',
  });
  return TransactionDetails;
};