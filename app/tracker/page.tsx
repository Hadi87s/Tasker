import TaskItem from '@/components/task-item/TaskItem';
import { fetchData } from '@/services/fetchData'
import React from 'react'

const page = async () => {
  const todoList = (await fetchData()).slice(0,10); // take 10 tasks
  
  return (
    <div>
      <h1 className='text-center text-4xl xl:text-4xl 2xl:text-5xl'>Task Tracker</h1>
      <div className='flex gap-5 flex-wrap mb-5 justify-center'>
      {
        todoList.map((item) => (
          <TaskItem key={item.id} task={item} />
        ))
      }
      </div>
    </div>
  )
}

export default page
