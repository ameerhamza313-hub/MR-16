import CategoryModel from "../../models/products/category.js";
import ProductModel from "../../models/products/index.js";
import { Op } from "sequelize";
const ProductController = {
  getAll: async (req, res) => {
    try {
      const products = await ProductModel.findAll({
        include: [
          {
            model: CategoryModel,
            attributes: ["name"],
            where: {
              name: {
                [Op.like]: '%Polo%'
              },
            },
          },
        ],
      });
     
      res.json({ data: products });
    } catch (error) {
      res.status(500).json({ message: "internal server error", error });
      console.log(error);
    }
  },

  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "no product with this name" });
      }
      res.status(200).json({ data: product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },

  post: async (req, res) => {
    try {
      const payload = req.body;
      const product = new ProductModel();
      product.name = payload.name;
      product.rate = payload.rate;
      product.stock = payload.stock;

      await product.save();
      await product.addCategories(payload.categories);

      res.status(200).json({ message: "Product created", product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error", error });
    }
  },
};
export default ProductController;
