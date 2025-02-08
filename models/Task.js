import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const Task = Sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
(async () => {
    await Sequelize.sync();
  })();
module.exports=Task;