import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./User.js";
const Task = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "userId" }, // Foreign key reference
      onDelete: "CASCADE", // If user is deleted, delete all their posts
    },
  },
  {
    timestamps: false, // Désactive createdAt et updatedAt
  }
);
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

export default Task;
