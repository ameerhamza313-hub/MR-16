import MarksModel from "../../models/marks/index.js";

const marks = [
  { FSC: "class1", urdu: "30%", english: "Fail", },
  { FSC: "class2", urdu: "33%", english: " 80%.", },
];
const marksController = {
  getAll:async(req, res) => {
    try {
    const marks = await MarksModel.findAll({
      // where: {
      //   Physics: "Fail",
      // },
      // order: [["createdAt", "DESC"]],
      // limit: 4,
    })
      res.json({ data: marks });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  getSingle:async (req, res) => {
    try {
      const { id } = req.params;
    //   const mark = marks.find((ele) => ele.FSC == FSC);
    const mark = await MarksModel.findOne({
      where:{
        id: id,
      }})

      if (!mark) {
        res.status(200).json({ message: "no marks found" });
      }
      res.status(200).json({ data: mark });
    } catch (error) {
      res.status(500).json({ message: "inter server error" });
    }
  },

  post: async (req, res) => {
    try {
      const payload = req.body;
      const NewMarks = await MarksModel.create({
        
        English: payload.English,
        Urdu: payload.Urdu,
        Physics: payload.Physics,
        
      });
      NewMarks.save();
      res.status(200).json({ message: "marks created successfully", NewMarks });
      
      console.log(marks);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  update:async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const marksIndex  = await MarksModel.findByPk(id);
      marksIndex.English = payload.English,
      marksIndex.Urdu = payload.Urdu,
      marksIndex.Physics = payload.Physics,
      await marksIndex.save();
      // const marksIndex = marks.findIndex((ele) => ele.FSC == FSC);

      // if (marksIndex == -1) {
      //   return res.status(404).json({ message: "no marks found" });
      // }
      // if (payload.FSC) {
      //   marks[marksIndex].FSC = payload.FSC;
      // }
      // if (payload.urdu) {
      //   marks[marksIndex].urdu = payload.urdu;
      // }
      // if (payload.english) {
      //   marks[marksIndex].english = payload.english;
      // }
      res.status(200).json({ message: "marks update successfully", marks });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },

  delete:async (req, res) => {
    try {
      const { id } = req.params;
      const marksIndex  = await teacherModules.findByPk(id);
      await marksIndex.destroy();
      // const marksIndex = marks.findIndex((ele) => ele.FSC == FSC);
      // if (marksIndex == -1) {
      //   return res.status(404).json({ message: "marks not found" });
      // }
      // marks.splice(marksIndex, 1);
      res.status(200).json({ message: "marks delete successfully",marksIndex });
      console.log(marks);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  },
};

export default marksController;
