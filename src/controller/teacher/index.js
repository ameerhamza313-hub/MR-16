import teacherModules from "../../models/teacher/index.js";

const teachers = [
  {
    name: "akbar",
    age: "30",
    address: "SHK",
  },
  {
    name: "Khan",
    age: "33",
    address: " GUJ.",
  },
];
const teachersController = {
  getAll: async (req, res) => {
    try {
      const teachers = await teacherModules.findAll({
        where: {
          firstName: "ali",
        },
        order: [["createdAt", "DESC"]],
        limit: 2,
      });
      res.json({ data: teachers });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: (req, res) => {
    try {
      const { name } = req.params;
      const teacher = teachers.find((ele) => ele.name == name);

      if (!teacher) {
        res.status(200).json({ message: "no teacher with this name" });
      }
      res.status(200).json({ data: teacher });
    } catch (error) {
      res.status(500).json({ message: "inter server error" });
    }
  },

  post: async (req, res) => {
    try {
      const payload = req.body;
      const NewTeacher = await teacherModules.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
      });
      res
        .status(200)
        .json({ message: "teacher created successfully", NewTeacher });
      console.log(teachers);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  update: (req, res) => {
    try {
      const { name } = req.params;
      const payload = req.body;
      const teacherIndex = teachers.findIndex((ele) => ele.name == name);

      if (teacherIndex == -1) {
        return res.status(404).json({ message: "teacher not found" });
      }
      if (payload.name) {
        teachers[teacherIndex].name = payload.name;
      }
      if (payload.age) {
        teachers[teacherIndex].name = payload.age;
      }
      if (payload.address) {
        teachers[teacherIndex].name = payload.address;
      }
      res
        .status(200)
        .json({ message: "teacher update successfully", teachers });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  delete: (req, res) => {
    try {
      const { name } = req.params;
      const teacherIndex = teachers.findIndex((ele) => ele.name == name);
      if (teacherIndex == -1) {
        return res.status(404).json({ message: "teacher not found" });
      }
      teachers.splice(teacherIndex, 1);
      res.status(200).json({ message: "teacher delete successfully" });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },
};

export default teachersController;
