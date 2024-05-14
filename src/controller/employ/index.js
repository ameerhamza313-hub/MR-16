const employes = [
  ({ name: "tayyab", role: "teacher", age: "33", address: "Gulburg" },
  { name: "awais ali", role: "manager", age: "54", address: "phase 3" }),
];
const employConroller = {
  getAll: (req, res) => {
    try {
      res.json({ data: employes });
    } catch (error) {
      res.status(400).json({ message: "internal server error" });
    }
  },
  getSingle: (req, res) => {
    try {
      const { name } = id.params;
      const employ = employes.find((ele) => ele.name == name);
      if (!employ) {
        res.status(400).json({ message: "employ cannot found" });
      }
      res.status(200).json({ data: employ });
    } catch (error) {
      res.status(500).json({ message: "inter server error" });
    }
  },
  update: (req, res) => {
    try {
      const { name } = id.params;
      const { payload } = id.body;
      const employIndex = employes.findIndex((ele) => ele.name == name);
      if (employIndex == -1) {
        res.status(400).json({ message: "employ not found" });
      }
      if (payload.name) {
        employes[employIndex].name == name;
      }
      if (payload.role) {
        employes[employIndex].role == role;
      }
      if (payload.age) {
        employes[employIndex].age == age;
      }
      if (payload.address) {
        employes[employIndex].address == address;
      }
      res.status(200), json({ message: "employ update successfully" });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  postAll: (req, res) => {
    try {
      const  payload  = req.body;
      employes.push(payload);
      res.status(200).json({ message: "students created successfully" , employes});
      console.log(employes)
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },
  delete: (req, res) => {
    try {
      const { name } = id.params;
      const employIndex = employes.findIndex((ele) => ele.name == name);
      if (employIndex == -1) {
        res.status(404).json({ message: "employ not found" });
      }
      employes.splice(employIndex, 1);
      res.status(200).json({ message: "employ delete successfully" });
      z;
    } catch (error) {}
  },
};
export default employConroller;
