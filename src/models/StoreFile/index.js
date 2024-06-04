import { DataTypes } from 'sequelize';
import sequelize from '../../dbConnection/config.js';


const storeFile = sequelize.define(
  'Files',
  {
    // Model attributes are defined here
    file_url: {
      type: DataTypes.STRING,
      required:true,
    },

  },

);
export default storeFile;