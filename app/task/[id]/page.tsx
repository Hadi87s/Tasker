import TaskDetails from '@/components/task-details/TaskDetails';
import { fetchData } from '@/services/fetchData';
import React from 'react'

interface IParams {
    params: Promise<{id: number}>
    searchParams: { [key: string]: string };
}

const page = async({params, searchParams}: IParams) => {
  
    const id = (await params).id 
    const { imageUrl } = searchParams;
    const todoList = (await fetchData()).slice(0,10); 
    
    const task = todoList.find((task) => task.id === Number(id));
    if (!task) {
      return <div className='p-4 text-4xl font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>404 | Task not found</div>;
    }
  return (
    <div>
      {todoList.map((item)=> (item.id === Number(id) && <TaskDetails src={imageUrl} key={item.id}  task={item}/>))}
    </div>
  )
}

export default page
