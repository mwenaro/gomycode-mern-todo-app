import { Button } from "./Button"

interface TodoItemProps{
    _id:string
    title:string,
    completed:boolean
}

export function TodoItem({_id,title, completed}:TodoItemProps) {
console.log({_id, completed})

  return (
    <div className="flex items-center justify-between">
        <h3>{title}</h3>

        <div>
            <Button className="bg-orange-600">Update</Button>
            <Button className="bg-red-600">Delete</Button>
        </div>
    </div>
  )
}
