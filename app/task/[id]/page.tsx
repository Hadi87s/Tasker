"use client";
import TaskDetails from '@/components/task-details/TaskDetails';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const page = () => {
    const {id} = useParams(); 
    const params = useSearchParams();
    const imageUrl = params.get("imageUrl") || "";
    const [tasks,setTasks] = useState<Todo[]>();
    const [loading, setLoading] = useState(true);
    const [_, setError] = useState(false);
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
          setError(true);
        } finally{
          setLoading(false);
        }
      }
      if (id) fetchTasks();
    },[id])
    if (!tasks) return null; 
  return (
    <div>
      {loading && <p className="text-3xl text-center text-gray-500 z-50">Loading...</p>}
      {tasks.map((item)=> (item.id === Number(id) && <TaskDetails src={imageUrl} key={item.id}  task={item}/>))}
    </div>
  )
}

export default page
