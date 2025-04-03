
import ToDoItem from "./ToDoItem"




function ToDoList({todoList,deleteTask,toggleComp,edit,comp }){
  
    
        

    return (<div className="grid lg:grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-2 z-20  p-4 overflow-hidden">
        {todoList.map((tasks)=>(<ToDoItem key={tasks.id} title={tasks.Title} task={tasks.Task} time={tasks.TaskDate}  deleteTask={()=>deleteTask(tasks.id)} toggleComp={()=>toggleComp(tasks.id)} edit={()=>edit(tasks.id)} comp={tasks.Completed}/>))}
    </div>);
}
export default ToDoList