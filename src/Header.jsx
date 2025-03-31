import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import ToDoItem from './ToDoItem'
import ToDoList from './ToDoList'


function Header() {
  
const [title,setTitle]=useState("");
const [task,setTask]=useState("");
const [todoList,setTodoList]=useState(()=>{
  let local=localStorage.getItem('todoList');
  if(local)
      return JSON.parse(local)
  return [];
});
// const [c,setC]=useState(null);
// const [p,setP]=useState(null);
const [filter,setFilter]=useState("ALL");





useEffect(()=>{
  localStorage.setItem('todoList',JSON.stringify(todoList));
},[todoList]);

function deleteTask (id){
  const newList=todoList.filter((task)=>task.id !=id);
  setTodoList(newList);
}

    


function addTask(){
  if(title.length==0  ){
    alert("enter your task");
    return;
  }
  if(task.length==0){
      alert("enter your task");
    return;
    }
    const newTask={
      id:Date.now(),
      Title:`${title}`,
      Task:`${task}`,
      TaskDate:`${new Date().toLocaleString()}`,
      Completed:false
    }
    setTodoList([newTask,...todoList]);
    
    setTitle('');
    setTask('');
}




function toggleComp(id){
  let changeStatus=todoList.map((task)=>{
    if(task.id==id)
        return {...task,Completed:!task.Completed};
    else 
      return task;
  });
  setTodoList(changeStatus);
} 

let filterchanger=todoList.filter((task)=>{
  if (filter=="complete")
      return task.Completed;
  if(filter=="pending")
      return !task.Completed;
  return true;
});

function edit(id){
      let newtitle=prompt("Enter Your Updated Title:");
      let newtask=prompt("Enter the Updated Task ");
      if(newtitle.length>0 && newtask.length>0)
          {
            let editted=todoList.map((task)=>{
              if(task.id==id)
                  return {...task,Title:newtitle,Task:newtask};
              else 
                return task;
              
              })  
              setTodoList(editted);
          }
          else 
            alert("enter correct values for title and task0");


  }


  
     

  
  return (<div className=' p-2 bg-fixed   bg-repeat bg-cover h-full  bg-[url(https://images.pexels.com/photos/6690918/pexels-photo-6690918.jpeg?auto=compress&cs=tinysrgb&w=600)]'>
    <h1 className='text-4xl text-center sticky top-0 font-serif  text-black font-extrabold bg-gray-100/20 p-3  '>To-Do-List</h1>

  <div className='sticky top-15 flex justify-center  border-t-2 bg-gray-900/50  rounded-b-4xl z-50'>
  
    <input type="text" value={title} placeholder='ADD TITLE' className='border-2 m-3 rounded-3xl bg-orange-300 p-2 pl-5 w-1/4' name='title' onChange={(e)=>setTitle(e.target.value)} />
   
    <input type="text" name="task" value={task} id="" placeholder='ADD TASK' className='pl-5 rounded-3xl bg-orange-300 p-2 w-1/4 border-2 m-3' onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addTask} className='bg-green-300 hover:bg-green-600  border p-2 m-2 w-18 rounded-2xl'>ADD</button>
  </div>
  <div className='flex justify-around sticky top-35 w-full mb-2 p-1 z-50'>
  <button onClick={()=>setFilter("ALL")} className={`hover:scale-105 w-1/3 active:bg-red-400 rounded-2xl duration-500 font-semibold ${filter=="ALL"?  " bg-neutral-600 text-white translate-y-2 ": " bg-blue-300 m-2 " }`}>VIEW ALL TASKS</button>
  <button onClick={()=>setFilter("pending")} className={`hover:scale-105  active:bg-red-400 font-semibold  duration-500  rounded-2xl w-1/3   ${filter=="pending"? "bg-neutral-600 text-white  translate-y-2  " :  "bg-blue-300 m-2 " }`}>PENDING TASKS </button>
  <button onClick={()=>setFilter("complete")} className={`hover:scale-105 active:bg-red-400 font-semibold duration-500   rounded-2xl w-1/3 ${filter=="complete"? "bg-neutral-600 text-white translate-y-2 " :  "bg-blue-300 m-2 " }`}>COMPLETED TASKS</button>
  {/* transition-500 */}
  </div  >

  
    {/* {todoList.map((item,index)=>( */}
    <ToDoList   todoList={filterchanger} deleteTask={deleteTask} toggleComp={toggleComp} edit={edit}   />
    
   
  
  </div>
  );
}

export default Header
