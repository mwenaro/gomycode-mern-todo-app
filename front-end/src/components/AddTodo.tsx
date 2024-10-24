import { FC, useState } from "react";
import { Button } from "./Button";
interface AddTodoProps {
  handleAddTodo: (data: any) => Promise<void>;
}

export const AddTodo: FC<AddTodoProps> = ({ handleAddTodo }) => {
  const [text, setText] = useState<string>("");

  return (
    <div className="w-full flex justify-between items-center  border-2 border-red-600 p-2">
      <input
        value={text}
        type="text"
        className="px-6 py-3 rounded"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="bg-green-800 px-4 py-2"
        onClick={() => handleAddTodo({title:text})}
      >
        Save
      </Button>
    </div>
  );
};
