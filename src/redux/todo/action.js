import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TODOLOADED, TOGGOLE } from "./actionType"

export const todosLoaded=(todos)=>{
    return{
    type: TODOLOADED,
    payload: todos,
    }
}
export const added=(todoText)=>{
    return{
    type: ADDED,
    playload: todoText,
    }
}
export const toggoled=(todoId)=>{
    return{
    type: TOGGOLE,
    playload: todoId,
    }
}
export const colorSelected=(todoId, color)=>{
    console.log(color);
    return{
    type: COLORSELECTED,
    playload: {
        todoId,
        color
    }
    }
}
export const deleted = (todoId) => {
    return{
    type: DELETED,
    playload:todoId
    }
}
export const allCompleted=()=>{
    return{
    type: ALLCOMPLETED,
   
    }
}
export const clearCompleted=()=>{
    return{
    type: CLEARCOMPLETED,
    }
}