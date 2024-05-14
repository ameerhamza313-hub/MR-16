import {Sequelize} from "sequelize";

const sequelize = new Sequelize("MR602", "postgres", "MoonMobile313", {
  host: "localhost",
  dialect: "postgres",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export { dbConnection };
export default sequelize;
