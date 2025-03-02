import TaskItem from '@/components/task-item/TaskItem';
import { fetchData, fetchRandomPhotos } from '@/services/fetchData'
import React from 'react'


const page = async () => {
  const todoList = (await fetchData()).slice(0,10); // take 10 tasks
  const images : IPic[] = (await fetchRandomPhotos());
  console.log(images);
  
  return (
    <div>
      <h1 className='text-center text-4xl xl:text-4xl 2xl:text-5xl font-bold p-4 my-2'>Task Tracker</h1>
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
