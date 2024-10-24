import { Button } from "./Button";

interface TodoItemProps {
  _id: string;
  title: string;
  completed: boolean;
  delete: (id: any) => Promise<void>;
  update: (id: any) => Promise<void>;
}

export function TodoItem({
  _id,
  title,
  completed,
  delete: handleDelete,
  update,
}: TodoItemProps) {
  console.log(completed)
  return (
    <div className="flex items-center justify-between shadow mb-2 ">
      <h3 className="first-letter:uppercase p-2 text-lg">{title}</h3>

      <div className="w-fit">
        <Button
          className="bg-orange-600 py-2 px-4 text-sm"
          onClick={() => update(_id)}
        >
          Update
        </Button>
        <Button
          className="bg-red-600 py-2 px-4 text-sm"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
