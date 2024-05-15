import { DataTypes } from 'sequelize';
import sequelize from '../../dbConnection/config.js';



const teacherModules = sequelize.define(
  'Teacher',
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
export default teacherModules;