import { deleted } from "../action";

const deleteTodo =(todoId)=>{
    return async(dispatch)=>{
        await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:"DELETE",
            // body:JSON.stringify({
            //     id: todoId,
            // }),
            // headers:{
            //     "Content-type": "application/json; charset=UTF-8"
            // }
        })
        // const todo = await response.json();
       
        dispatch(deleted(todoId))
    }
}
export default deleteTodo;