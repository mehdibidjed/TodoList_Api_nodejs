import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
(async () => {
  try {
    await sequelize.sync({ alter: true });  // Met à jour la table sans la recréer
    console.log("Table was synchronized!");
  } catch (error) {
    console.error("EError in synchornisation of the table :", error);
  }
})();
export default Task