import studentRouter from "./student/index.js";
import teacherRouter from "./teacher/index.js";
import marksRouter from "./marks/index.js";
import attendRouter from "./attendence/index.js";
import employRouter from "./employ/index.js";
import salesRouter from "./sales/index.js";


const allRouter = [studentRouter, teacherRouter, marksRouter, attendRouter, employRouter, salesRouter];

export default allRouter;
