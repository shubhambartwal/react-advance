import { nanoid } from 'nanoid'
export const addTodo=(text)=>{
    return {
        type:'ADD_TASK',
        payload:{

            id : nanoid(),
            text:text
        }
    }
}

export const deleteTodo=(id)=>{

    return {
        type:'DELETE_TASK',
        payload:id
        }
}