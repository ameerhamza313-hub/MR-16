import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";

const tokenModel = sequelize.define("Token", {
  token: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },

});

export default tokenModel;
