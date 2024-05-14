const attendences = [
  {
    className: "class1",
    createdAt: "12/1/2024",
    attend: "34%",
  },
  {
    class: "class2",
    createdAt: "22/1/2024",
    attend: "78%",
  },
];
const attendencesController = {
  getAll: (req, res) => {
    try {
      res.json({ data: attendences });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle: (req, res) => {
    try {
      const { className } = req.params;
      const attends = attendences.find((ele) => ele.className == className);

      if (!attends) {
        res.status(200).json({ message: "no attendence record found" });
      }
      res.status(200).json({ data: attends });
    } catch (error) {
      res.status(500).json({ message: "inter server error" });
    }
  },

  post: (req, res) => {
    try {
      const payload = req.body;
      attendences.push(payload);
      res
        .status(200)
        .json({ message: "attendence created successfully", attendences });
      console.log(attendences);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  update: (req, res) => {
    try {
      const { className } = req.params;
      const payload = req.body;
      const attendIndex = attendences.findIndex(
        (ele) => ele.className == className
      );

      if (attendIndex == -1) {
        return res.status(404).json({ message: "no attendence found" });
      }
      if (payload.name) {
        students[attendIndex].className = payload.className;
      }
      if (payload.age) {
        students[studentIndex].createdAt = payload.createdAt;
      }
      if (payload.address) {
        students[studentIndex].attend = payload.attend;
      }
      res
        .status(200)
        .json({ message: "attendence update successfully", attendences });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  delete: (req, res) => {
    try {
      const { className } = req.params;
      const attendIndex = attendences.findIndex(
        (ele) => ele.className == className
      );
      if (attendIndex == -1) {
        return res.status(404).json({ message: "attendence  not found" });
      }
      students.splice(attendIndex, 1);
      res.status(200).json({ message: "attendence delete successfully" });
      console.log(attendences);
    } catch (error) {
      res.student(500).json({ message: "internal server error" });
    }
  },
};

export default attendencesController;
