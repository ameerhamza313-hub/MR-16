import SaleProductModel from "../../models/sales/saleproduct";

const ProductController = {
    getAll: async (req, res) => {
      try {
      
        const sales = await SaleProductModel.findAll({
          // include: [ProductModel],
         });
        res.json({ data: sales, });
      } catch (error) {
        res.status(500).json({ message: "internal server error" });
      }
    },
}  
export default ProductController;