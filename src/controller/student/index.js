import studentModel from "../../models/student/index.js";

const students = [
  {
    name: "Hamza",
    age: "24",
    address: "lahore",
  },
  {
    name: "zain",
    age: "20",
    address: "lahore 2",
  },
];
const studentsController = {
  getAll: async (req, res) => {
    try {
      const students = await studentModel.findAll({
        // where: {
        //   firstName: "khan",
        // },
        // order: [["createdAt", "DESC"]],
        // limit: 1,
      });
      res.json({ data: students });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      // const student = await studentModel.findByPk(id);
      const student = await studentModel.findOne({
        where: {
          id: id,
        },
      });
      //const student = students.find((ele) => ele.name == name);

      if (!student) {
        res.status(200).json({ message: "no student with this name" });
      }
      res.status(200).json({ data: student });
    } catch (error) {
      res.status(500).json({ message: "inter server error" });
    }
  },

  post: async (req, res) => {
    try {
      const payload = req.body;
      const NewStudent = await studentModel.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
      res
        .status(200)
        .json({ message: "student created successfully", NewStudent });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const studentIndex = await studentModel.findByPk(id);
      // studentIndex.firstName = "akbar",
      // studentIndex.lastName = "khan"
      studentIndex.firstName = payload.firstName,
      studentIndex.lastName = payload.lastNameIndex
      await studentIndex.save();

      // const studentIndex = students.findIndex((ele) => ele.name == name);

      // if (studentIndex == -1) {
      //   return res.status(404).json({ message: "student not found" });
      // }
      // if (payload.name) {
      //   students[studentIndex].name = payload.name;
      // }
      // if (payload.age) {
      //   students[studentIndex].name = payload.age;
      // }
      // if (payload.address) {
      //   students[studentIndex].name = payload.address;
      // }
      res.status(200).json({ message: "student update successfully", studentIndex });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const studentIndex = await studentModel.findByPk(id);
      await studentIndex.destroy();
      // const studentIndex = students.findIndex((ele) => ele.name == name);
      // if (studentIndex == -1) {
      //   return res.status(404).json({ message: "student not found" });
      // }
      // students.splice(studentIndex, 1);
      res
        .status(200)
        .json({ message: "student delete successfully", studentIndex });
      console.log(studentIndex);
    } catch (error) {
      res.student(500).json({ message: "internal server error" });
    }
  },
};

export default studentsController;
