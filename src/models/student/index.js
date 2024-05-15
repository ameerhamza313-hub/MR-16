import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";


const studentModel = sequelize.define(
  'student',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

  },
  {
    // Other model options go here
  },
);


export default studentModel;