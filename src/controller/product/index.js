import ProductModel from "../../models/products/index.js";

const ProductController = {
  getAll: async (req, res) => {
    try {
      const products = await ProductModel.findAll({});
      res.json({ data: products });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);
      if (!product) {
      return  res.status(404).json({ message: "no product with this name" });
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


      res.status(200).json({ message: "Product created", product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
 
};
export default ProductController;
