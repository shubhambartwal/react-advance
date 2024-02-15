import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice";

export function Task() {
    const dispatch = useDispatch();
    const inputRef = useRef(null)
    const handleAdd = () => {
        const task = inputRef.current.value.trim();
        if (task !== "") {
            dispatch(addTodo(task))
            inputRef.current.value = ''
        }
    }
    return (<div className="task-component">
        <div className="add-task">     
           <input type="text" placeholder="Enter the todo item" ref={inputRef} className="taskInput" />
            <Button onClick={handleAdd}>Add Todo</Button>
        </div>

    </div>
    )
}
