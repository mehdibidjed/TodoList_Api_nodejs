import Task from "../models/Task.js";

const addTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user.id,
  });
  res.status(201).json(task);
};

const deleteTask = async (req, res) => {
  try {
    const userId = req.user.id;
    id = req.params.id;
    const task = await Task.findByPk({ where: { id, userId } });
    if (!task) return res.status(404).json({ message: "Task not found " });
    await task.destroy();
    res.status(201).json({ message: "Task removed " });
  } catch (error) {
    res.status(500).json({ message: "error in removing Task" });
  }
};
const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const alltask = await Task.findAll({ where: { userId } });

    if (!alltask) return res.status(404).json({ message: "not tasks fonded " });
    res.status(200).json(alltask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error in getting  Task" });
  }
};
const modifyTask = async (req, res) => {
  try {
    const { id } = req.query;
    const userId = req.user.id;
    if (!id) return res.status(400).json({ message: "No ID provided" });
    const task = await Task.findOne({ where: { id, userId } });
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.update(req.body);
    res.status(200).json({ message: "Task updated", task });
  } catch (error) {
    res.status(500).json({ message: "error in updating task  Task" });
  }
};
export default { addTask, deleteTask, getTasks, modifyTask };
