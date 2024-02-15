import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const TaskList=()=>{
    const tasks=useSelector((state)=>state.tasks)
  const dispatch=useDispatch();
  function handleDelete(){
    dispatch(deleteTodo(id))
  }
  return(<div className="tasklist">
  <div className="display-tasks">
    <h3>Your tasks:</h3>
    <ul className="tasks">
      {tasks.map((task) => (
        <li className="task" key={task.id}>
          {task.text}
          <button
            className="delete-btn"
            onClick={() => handleDelete(task.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>)
} 
export default TaskList;