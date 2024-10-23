import { Request, Response, Router } from "express";
import { TodoModel } from "../models/todo";

const todoRouter = Router();

// GET /todos
todoRouter.get("/", async (req: Request, res: Response) => {
  try {
    const fetchedTodos = await TodoModel.find();
    if (!fetchedTodos.length) {
      res.status(404).json({ message: "No todos found  " });
    }
    res.json(fetchedTodos);
  } catch (error: any) {
    res.status(500).json({ message: "Error " + error.message });
  }
});
// GET /todos/1
todoRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const fetchedTodo = await TodoModel.findById(req.params.id);
    if (!fetchedTodo) {
      res
        .status(404)
        .json({ message: "No todo found with id " + req.params.id });
    }
    res.json(fetchedTodo);
  } catch (error: any) {
    res.status(500).json({ message: "Error " + error.message });
  }
});

//POST  /todos
todoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newTodo = new TodoModel(req.body);
    const savedTodo = await newTodo.save();
    if (!savedTodo) throw Error("An errored occured while creating todo");
    res.status(201).json(savedTodo);
  } catch (error: any) {
    res.status(500).json({ message: "Error " + error.message });
  }
});

//POST  /todos
todoRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedTodo) throw Error("An errored occured while updating todo");
    res.status(201).json(updatedTodo);
  } catch (error: any) {
    res.status(500).json({ message: "Error " + error.message });
  }
});

//DELETE /todos/1
todoRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      res
        .status(404)
        .json({ message: "No todo found with id " + req.params.id });
    }
    res.json(deletedTodo);
  } catch (error: any) {
    res.status(500).json({ message: "Error " + error.message });
  }
});

export { todoRouter };
