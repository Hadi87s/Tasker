"use client";
import TaskDetails from '@/components/task-details/TaskDetails';
import { fetchData } from '@/services/fetchData';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const page = () => {
    const {id} = useParams(); 
    const params = useSearchParams();
    const imageUrl = params.get("imageUrl") || "";
    const [tasks,setTasks] = useState<Todo[]>();
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
      async function fetchTasks () {
        try{
          const res = await fetch("https://jsonplaceholder.typicode.com/todos");
          if(!res.ok){
            throw new Error("Failed to fetch tasks");
          }
          const data : Todo[] = await res.json();
          setTasks(data);
        } catch (error) {
          console.error(error);
        } finally{
          setLoading(false);
        }
      }
      if (id) fetchTasks();
    },[id])
    
    // const task = todoList.find((task) => task.id === Number(id));
    if (!tasks?.length) {
      return <div className='p-4 text-4xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>404 | Task not found</div>;
    }
  return (
    <div>
      {}
      {tasks.map((item)=> (item.id === Number(id) && <TaskDetails src={imageUrl} key={item.id}  task={item}/>))}
    </div>
  )
}

export default page
