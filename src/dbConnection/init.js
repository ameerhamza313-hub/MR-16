
import MarksModel from "../models/marks/index.js";
import StockProductModel from "../models/sales/products.js";
import SalesModel from "../models/sales/sale.js";
import SaleProductModel from "../models/sales/saleproduct.js";
import studentModel from "../models/student/index.js";
import teacherModules from "../models/teacher/index.js";

const syncDB = async () => {
  await studentModel.sync({ alter: true, force: false });
  await teacherModules.sync({ alter: true, force: false });
  await MarksModel.sync({ alter: true, force: false });
  await StockProductModel.sync({ alter: true, force: false });
  await SalesModel.sync({ alter: true, force: false });
  await SaleProductModel.sync({ alter: true, force: false });
 
  console.log(
    "The table for the student and teacher model was just (re)created!"
  );
};
export default syncDB;
