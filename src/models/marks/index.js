import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";

const MarksModel = sequelize.define(
  "Marks",
  {
    // Model attributes are defined here
    English: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Urdu: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    Physics: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);
export default MarksModel;
