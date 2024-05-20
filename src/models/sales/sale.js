import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";

const SalesModel = sequelize.define(
  "Sales",
  {
    totalAmount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

export default SalesModel;
