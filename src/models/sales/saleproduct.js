import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";
import SalesModel from "./sale.js";
import StockProductModel from "./products.js";
const SaleProductModel = sequelize.define(
  "SaleProduct",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productQuantity: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.STRING,
    },
  },
  {}
);
// SalesModel.hasMany(ProductModel);
// ProductModel.belongsTo(SalesModel);
StockProductModel.hasMany(SalesModel);
SalesModel.belongsTo(SaleProductModel);

export default SaleProductModel;
