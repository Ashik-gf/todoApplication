import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import fetchTodos from "../redux/todo/thank/fetchtodos";

export default function TodoList() {
    const todo = useSelector((state)=> state.todo)
    const filters = useSelector((state)=>state.filterReducer)
    const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(fetchTodos)
   },[])
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
            todo
            .filter(todo=>{
                const {status}=filters
                switch (status) {
                    case 'all':
                        return true
                    case 'complete':
                        return todo.completed
                    case 'incomplete':
                        return !todo.completed
                
                    default:
                    return true;
                }
            })
            .filter(todo=>{
                const {colors}=filters;
                if(colors.length > 0){
                    return colors.includes(todo?.color)
                }
                return true;
            })
            .map(todo=> <Todo todo={todo} key={todo.id} />)
            }
            
        </div>
    );
}
