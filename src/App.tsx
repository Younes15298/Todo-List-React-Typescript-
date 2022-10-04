import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './component/inputField';
import TodoList from './component/todoList';
import { Todo } from './model';




const App: React.FC = () => {
const [todo,setTodo]  =useState<string>("");
const [todos,setTodos]=useState<Todo[]>([]);
 const[completedTodos,setCompletedTodos]= useState<Todo[]>([]); 

useEffect(()=>{
  if (localStorage.getItem("tasks")) {  
   setTodos(JSON.parse(localStorage.getItem("tasks") || ""));
  }
},[])








const handleAdd = (e : React.FormEvent) => {
e.preventDefault();

if(todo){
  setTodos([...todos,{id: Date.now() , todo , isDone:false}])
  localStorage.setItem("tasks",JSON.stringify([...todos,{id: Date.now() , todo , isDone:false}]))
  setTodo('');


}

};













  return (

    <div className="App">
    <span className='heading'><b>TODO</b></span>
    <InputField  todo={todo} setTodo ={setTodo} handleAdd={handleAdd} todos={todos} />
 
    <TodoList 
    todos={todos} 
    setTodos={setTodos} 
    completedTodos={completedTodos} 
    setCompletedTodos={setCompletedTodos} />

   
    </div>

    
  );
}

export default App;
