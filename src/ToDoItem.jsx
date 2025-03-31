
import { useState } from "react";

function ToDoItem({title,task,time,complete,deleteTask,toggleComp,edit,comp}){
    const [cross,setCross]=useState(false);
   // cross==true?(<s>title</s>):

   


    return (<>
        <div className='hover:scale-105 duration-300 font-mono flex   justify-between m-3 border-2 rounded-2xl bg-neutral-400/40 h-full'>
                <div className='bg-blue-700/65 w-full rounded-3xl text-white'>
            
                      <section className='flex border-b-2 bg-gray-300/60 w-full justify-center items-center h-1/3 rounded-3xl'>
                        
                            <input className='m-4 '  onChange={(e)=>setCross(!cross)} type="checkbox" name="ch" id="ch" />
                            <h3 className={`text-neutral-950 conic  w-full ${cross?"line-through":""}`}>Title :{title} </h3>
                            <span className={`rounded-2xl p-1 bg-amber-200 text-sm ${cross? "line-through" : ""} text-black `}>Added On:<br/>{time}</span>
                      </section>

                      
                      <p className={`m-4  ${cross?"line-through": ""}`}>Task:{task} </p>
            
            
                </div>
                <div className='flex flex-col text-white'>
                      <button  onClick={edit} className=' rounded-3xl bg-blue-600 w-fit h-fit p-4 m-2 active:bg-cyan-400'>Edit <i class="fa-solid fa-pen-to-square"></i></button>
                      <button onClick={deleteTask}  className='h-fit p-3 hover:bg-red-400 bg-red-600 rounded-3xl w-fit m-2'>DELETE <i class="fa-solid fa-trash-can"></i></button>
                      <button onClick={toggleComp} className="active:bg-green-400 text-red-700 rounded-md bg-amber-300">Mark as Done/ Not Done <i class="fa-solid fa-check-double"></i></button>
                      <span className="text-black m-1"><i className={`${comp?"fa-regular fa-square-check":"fa-regular fa-hourglass-half"}`}></i></span>
                </div>
         </div>
         </>)
}
export default ToDoItem;