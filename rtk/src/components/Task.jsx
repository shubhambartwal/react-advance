import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice";
import { useRef } from "react";

 function Task() {
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
            <button onClick={handleAdd}>Add Todo</button>
        </div>

    </div>
    )
}
export default Task;