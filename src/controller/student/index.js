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
  getAll: (req, res) => {
    try {
      res.json({ data: students });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: (req, res) => {
    try {
      const { name } = req.params;
      const student = students.find((ele) => ele.name == name);

      if (!student) {
        res.status(200).json({ message: "no student with this name" });
      }
      res.status(200).json({ data: student });
    } catch (error) {
      res.status(500).json({ message: "inter server error" });
    }
  },

  post: (req, res) => {
    try {
      const payload = req.body;
      students.push(payload);
      res
        .status(200)
        .json({ message: "student created successfully", students });
      console.log(students);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  update: (req, res) => {
    try {
      const { name } = req.params;
      const payload = req.body;
      const studentIndex = students.findIndex((ele) => ele.name == name);

      if (studentIndex == -1) {
        return res.status(404).json({ message: "student not found" });
      }
      if (payload.name) {
        students[studentIndex].name = payload.name;
      }
      if (payload.age) {
        students[studentIndex].name = payload.age;
      }
      if (payload.address) {
        students[studentIndex].name = payload.address;
      }
      res
        .status(200)
        .json({ message: "student update successfully", students });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  delete: (req, res) => {
    try {
      const { name } = req.params;
      const studentIndex = students.findIndex((ele) => ele.name == name);
      if (studentIndex == -1) {
        return res.status(404).json({ message: "student not found" });
      }
      students.splice(studentIndex, 1);
      res.status(200).json({ message: "student delete successfully" });
      console.log(students);
    } catch (error) {
      res.student(500).json({ message: "internal server error" });
    }
  },
};

export default studentsController;
