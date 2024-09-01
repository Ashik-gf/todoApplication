import { toggoled } from "../action"

const updateStatas =(todoId, currentStatus)=>{
    console.log(todoId)
    return async(dispatch)=>{
        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:"PATCH",
            body:JSON.stringify({
                completed: !currentStatus,
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const todo = await response.json();
        console.log(todo);
        dispatch(toggoled(todo.id))
    }
}
export default updateStatas;