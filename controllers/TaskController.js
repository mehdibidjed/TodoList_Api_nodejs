import Task from "../models/Task.js";

const addTask = async (req, res) => {
  console.log(req.body);
  const task = await Task.create(req.body);
  console.log(task);
  res.status(201).json(task);
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found " });
    await task.destroy();
    res.status(201).json({ message: "Task removed " });
  } catch (error) {
    res.status(500).json({ message: "error in removing Task" });
  }
};
const getTasks = async (req, res) => {
  try {
    const alltask = await Task.findAll();
    if (!alltask) return res.status(404).json({ message: "not tasks fonded " });
    res.status(200).json(alltask);
  } catch (error) {
    res.status(500).json({ message: "error in getting  Task" });
  }
};
const modifyTask= async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ message: "No ID provided" });
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.update(req.body); 
    res.status(200).json({ message: "Task updated", task });
  } catch (error) {
    res.status(500).json({ message: "error in updating task  Task" });
  }
};
export default { addTask, deleteTask, getTasks,modifyTask };
