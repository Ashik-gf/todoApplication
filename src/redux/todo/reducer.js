
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TODOLOADED, TOGGOLE } from "./actionType";
import initialState from './initialState';

// maxID function
const nextToDoID = (todo) => {
  const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case TODOLOADED:
      return action.payload
    case ADDED:
      return action.payload
    case TOGGOLE:
      return state.map((todo) => {
       
        if (todo.id !== action.playload) {
          return todo;
        }
          return {
            ...todo,
            completed: !todo.completed,
          };
        
      });
    case COLORSELECTED:
      const { color, todoId } = action.playload;
      console.log(color, todoId);
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        {
          return {
            ...todo,
            color: color,
          };
        }
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.playload);
    case ALLCOMPLETED:
      return state.map(todo=>{
        return {
            ...todo,
            completed: true
        }
      })
    case CLEARCOMPLETED:
      return state.filter(todo=> !todo.completed)

    default:
      return state;
  }
};
export default todoReducer;