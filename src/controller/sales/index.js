import { where } from "sequelize";
import SalesModel from "../../models/sales/sale.js";
import SaleProductModel from "../../models/sales/saleproduct.js";



const SalesController = {
  getAll: async (req, res) => {
    try {
    
      const sales = await SalesModel.findAll({
        // include: [ProductModel],
       });
      res.json({ data: sales, });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const sale = await SalesModel.findByPk(id, { include: [SaleProductModel] });
      if (!sale) {
        res.status(404).json({ message: "no sale with this name" });
      }
      res.status(200).json({ data: sale });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },
  // getSingleProduct: async (req, res) => {
  //   try {
  //     // const { id } = req.params;
  //     const {productName} = req.query;
  //     const payload = req.body;
  //     const pname = await ProductModel.findAndCountAll(productName,{
  //       where:{
  //         productName: payload.productName,
  //         // productName: "book",
  //       }
  //     });
  //     console.log(pname);

  //     if (!pname) {
  //       res.status(404).json({ message: "no product with this name" });
  //     }
  //     res.status(200).json({ data: pname });
  //   } catch (error) {
  //     console.log(error)
  //     res.status(500).json({ message: "internal server error" });
  //   }
  // },

  post: async (req, res) => {
    try {
      const  payload  = req.body;
      console.log("payload", payload);
      const sale = new SalesModel();
      sale.totalAmount = payload.totalAmount;
      await sale.save();
      console.log(payload.totalAmount)
      

      const salesProduct = payload.saleproduct.map((ele) => {
        return {
          ...ele,
          SaleId: sale.id,
   
//     const salesProduct = [];
// (payload.saleproduct ?? []).forEach((ele) => {
//   salesProduct.push({
//     ...ele,
//     SaleId: sale.id,

    
        };
      });
      console.log("sales products",salesProduct);
      await SaleProductModel.bulkCreate(salesProduct);

      res.status(200).json({ message: "sale created", sale,salesProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const salesIndex = await studentModel.findByPk(id);
      await studentIndex.destroy();
      res
        .status(200)
        .json({ message: "student delete successfully", studentIndex });
      console.log(studentIndex);
    } catch (error) {
      res.student(500).json({ message: "internal server error" });
    }
  },
};
export default SalesController;
