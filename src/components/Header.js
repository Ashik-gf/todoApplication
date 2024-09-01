import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todo/action";
import addTodo from "../redux/todo/thank/addTodoThunk";

export default function Header() {
    const [input, setInput]= useState('')
    const dispatch = useDispatch()
    const handelChange = (e) =>{
        setInput(e.target.value)
    }
const submithandeler = (e) =>{
e.preventDefault()
if(input.length > 0){
   dispatch(addTodo(input)) 
} return setInput('')
}

const completeHandeler = () =>{
    dispatch(allCompleted())
}
const clearHandeler =()=>{
    dispatch(clearCompleted())
}
    return (
        <div>
            <form onSubmit={submithandeler} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                   value={input}
                    onChange={handelChange}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={completeHandeler} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={clearHandeler} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
