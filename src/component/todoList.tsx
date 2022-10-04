import React from 'react'
import { Todo } from '../model';
import SingleTodo from './singleTodo';
import './styles.css';

interface Props{
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
completedTodos:Todo[];
setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ( {todos,setTodos,completedTodos,setCompletedTodos}:Props ) => {
    return (
        <>
<div className='container'>
{/* <Droppable droppableId='TodosList'> */}
 
    <div className="todos"
>
    <span className="todos-heading">Active Tasks</span>
{todos.map((todo ,index) =>(
   <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
))}

</div>
</div>



        </>
    )
}

export default TodoList;
