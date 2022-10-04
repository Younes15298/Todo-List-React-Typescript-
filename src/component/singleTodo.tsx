import React ,{useState,useRef, useEffect}from 'react'
import { Todo } from '../model';
import './styles.css';
import {AiFillEdit , AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';



interface Props{
index:number;
todo:Todo;
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;


}

const SingleTodo = ( {todo,todos,setTodos}:Props ) => {

const [edit,setEdit]        =useState<boolean>(false)
const [editTodo,setEditTodo]= useState<string>(todo.todo)
const inputRef =useRef<HTMLInputElement>(null);


useEffect(()=>{
inputRef.current?.focus();
},[edit])

const handleDone = (id:number):void => {
    setTodos(
        todos.map((todo)=> todo.id === id ? {...todo,isDone:!todo.isDone}:todo)
    )
    window.localStorage.setItem("tasks", JSON.stringify(todos.map((todo)=> todo.id === id ? {...todo,isDone:!todo.isDone}:todo)));
} 

const handleDelete = (id:number):void => {

    setTodos(
        todos.filter((todo) => todo.id !== id)
    )
        window.localStorage.setItem("tasks", JSON.stringify( todos.filter((todo) => todo.id !== id)));

}

const handleEdit = ():void =>{
if(!edit && !todo.isDone){
    setEdit(!edit)
 
}
}

const handleEdits = (e: React.FormEvent, id:number) => {
e.preventDefault();
setTodos(
    todos.map((todo) => (todo.id === id?{...todo,todo:editTodo}:todo))
    )
    window.localStorage.setItem("tasks", JSON.stringify( todos.map((todo) => (todo.id === id?{...todo,todo:editTodo}:todo))));
    setEdit(false);
} 
    return (
        <form  className={`todos-single`} onSubmit={(e)=> handleEdits(e, todo.id)} >
{
edit?(
    <input  
    value={editTodo}
    onChange={(e)=>setEditTodo(e.target.value)}
    className="todos-single-text"
    ref={inputRef}  
    />
):(
    todo.isDone?(<s className="todos-single-text">
    {todo.todo}
    </s>)
    :
    (<span className="todos-single-text">
    {todo.todo}
    </span>)
)



}

<div>
<span className="icon" onClick={() => handleEdit()}>         <AiFillEdit/>   </span>
<span className="icon" onClick={() => handleDelete(todo.id)}> <AiFillDelete/> </span>
<span className="icon" onClick={() => handleDone(todo.id)}>    <MdDone/>      </span>
</div>

</form>

      
    );
}

export default SingleTodo;
