import { Model } from "sequelize";
import ProductModel from "../../models/products/index.js";
import CategoryModel from "../../models/products/category.js";

const CategoryController = {
  getAll: async (req, res) => {
    try {
      const categories = await CategoryModel.findAll({});
      res.json({ data: categories });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: async (req, res) => {
    try {
      const { id } = req.body;
      const category = await CategoryModel.findByPk(id);
      if(!category){
        return res.status(404).json({ message: "No category with this name" });
      }
      res.status(200).json({data: category})
    } catch (error) {
        res.status(500).json({message: "internal server error"});
    }
  },

  create: async(req, res)=>{
try {
    const payload = req.body;
    console.log("payload", payload);

    const Category = new CategoryModel();
    Category.name = payload.name;
    await Category.save();
    res.status(200).json({message: "Category  can be added", Category});
} catch (error) {
    console.log(error)
    res.status(500).json({message: "internal server error"});
    
}
  }
 
};
export default CategoryController;
