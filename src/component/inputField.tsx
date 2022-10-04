import React, { useRef } from 'react'
import './styles.css';
import { Todo } from '../model';
interface Props{
    todos:Todo[];
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e : React.FormEvent) => void;
}

const InputField = ( {todo,setTodo,handleAdd,todos}: Props ) => {
    const inputRef =useRef<HTMLInputElement>(null)
    return (
        <>
        <form className='input' onSubmit={(e)=>{
            handleAdd(e);
           
            inputRef.current?.blur();
        }}>
            <input type="input" placeholder='Enter your task' className='input-box' 
             value={todo}
             onChange={(e)=>setTodo(e.target.value)}
             ref ={inputRef}/>
            <button type="submit" className='input-submit'>Go</button>
        </form>
        </>
    )
}

export default InputField
