import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/action";
import { colorChanged } from "../redux/filters/action";

export default function Footer() {
    const taskFormetting =(num_of_task)=>{
switch (num_of_task) {
    case 0:
        return 'No Task'
    case 1:
        return '1 task'

    default:
        return `${num_of_task} task's`
}
    }
    const todos = useSelector((state)=>state.todo)
    const filter = useSelector((state)=>state.filterReducer)
    const {status, colors}= filter;
    const todoRemaining = todos.filter(todo=> !todo.completed).length
    const dispatch = useDispatch();
    const handelStatusChange = (status) =>{
        dispatch(statusChanged(status))}
   const handelColorChnage =(color)=>{
    console.log(color)
    if(colors.includes(color)){
        dispatch(colorChanged(color, "removed"))
    }else{
        dispatch(colorChanged(color, 'added'))
    }
   }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{ taskFormetting(todoRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={()=>handelStatusChange('all')} className= {`cursor-pointer ${status ==='all' && "font-bold"} `} >All</li>
                <li>|</li>
                <li onClick={()=>handelStatusChange('incomplete')} className= {`cursor-pointer ${status ==='incomplete' && "font-bold"} `} >Incomplete</li>
                <li>|</li>
                <li onClick={()=>handelStatusChange('complete')} className= {`cursor-pointer ${status ==='complete' && "font-bold"} `} >Complete</li>
                <li></li>
                <li></li>
                <li onClick={()=>handelColorChnage('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && "bg-green-500"} `}></li>
                <li onClick={()=>handelColorChnage('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && "bg-red-500"}`}></li>
                <li onClick={()=>handelColorChnage('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && "bg-yellow-500"} `}></li>
            </ul>
        </div>
    );
}
