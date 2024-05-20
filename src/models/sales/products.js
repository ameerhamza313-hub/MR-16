import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";
const StockProductModel = sequelize.define(
  "Products",
  {
        productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.DOUBLE,
    },
    stock: {
        type: DataTypes.STRING,
      },
  },
  {
  }
);


export default StockProductModel;
