import { DataTypes } from "sequelize";
import sequelize from "../../dbConnection/config.js";
import CategoryModel from "./category.js";
const ProductModel = sequelize.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
);

export default ProductModel;
ProductModel.belongsToMany(CategoryModel, { through: "categoryProduct" });
CategoryModel.belongsToMany(ProductModel, { through: "categoryProduct" });

