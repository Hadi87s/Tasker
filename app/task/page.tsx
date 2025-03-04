import TaskItem from '@/components/task-item/TaskItem';
import { fetchData, fetchRandomPhotos } from '@/services/fetchData'
import React from 'react'


const page = async () => {
  const todoList = (await fetchData()).slice(0,5); // take 10 tasks
  const images : IPic[] = (await fetchRandomPhotos());

  
  return (
    <div>
      <h1 className='text-center text-4xl xl:text-4xl 2xl:text-5xl font-bold p-4 my-2 mx-auto w-[95%] rounded-3xl bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-950'>Task Tracker</h1>
      <div className='flex gap-5 flex-wrap mb-5 justify-center items-center'>
      {
        todoList.map((item,index) => (
          <TaskItem key={item.id} imageSrc={images[index].urls.small} task={item} />
        ))
      }
      </div>
    </div>
  )
}

export default page
