import studentRouter from "./student/index.js";
import teacherRouter from "./teacher/index.js";
import marksRouter from "./marks/index.js";
import attendRouter from "./attendence/index.js";
import employRouter from "./employ/index.js";
import salesRouter from "./sales/index.js";
import productsRouter from "./products/index.js";
import categoryRouter from "./products/Category/index.js";
import authRouter from "./auth/index.js";
const allRouter = [
  studentRouter,
  teacherRouter,
  marksRouter,
  attendRouter,
  employRouter,
  salesRouter,
  productsRouter,
  categoryRouter,
  authRouter,

];

export default allRouter;
