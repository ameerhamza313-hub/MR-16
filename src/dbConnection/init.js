import studentModel from "../models/student/index.js";
import teacherModules from "../models/teacher/index.js";



const syncDB = async()=>{
    await studentModel.sync({ alter:true, force: false });
    await teacherModules.sync({alter: true, force: false})
console.log('The table for the student and teacher model was just (re)created!');
}
export default  syncDB;