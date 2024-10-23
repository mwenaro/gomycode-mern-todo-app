import mongoose from "mongoose";

export type Todo = {
    title:string
    completed?:boolean
}

const todoSchema = new mongoose.Schema<Todo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TodoModel = mongoose.model('Todo', todoSchema)