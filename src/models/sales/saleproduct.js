import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";
import SalesModel from "./sale.js";
import ProductModel from "../products/index.js";

const SaleProductModel = sequelize.define(
  "SaleProduct",
  {
   
    productQuantity: {
      type: DataTypes.INTEGER,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
  },
  {}
);
SalesModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(SalesModel);


ProductModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(ProductModel);

export default SaleProductModel;
 