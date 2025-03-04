import React from 'react'
import Link from 'next/link';
import Image from "next/image"
import { notFound } from "next/navigation";
import { CircleCheck, Clock } from 'lucide-react';

interface ITask {
  task: Todo;
  imageSrc?: string;
}

const TaskItem = ({task,imageSrc}: ITask) => {
  if(!task || task.id >= 200){
    notFound();
  }

  return (
    <div className='bg-zinc-800 p-4 rounded-3xl flex flex-col gap-2 mx-2 w-[400px] relative'>
        <Image
        src={imageSrc || ""}
        alt="someAltText"
        width={500}
        height={300}
        layout="responsive"
        className='rounded-2xl bg-cover'
        />
      <h2 className='font-bold text-xl lg:text-2xl'>{task.title}</h2>
      <span className={`p-2 text-sm w-fit ${task.completed? " bg-green-600/75": " bg-blue-600/75"} absolute top-4 right-4 font-bold rounded-2xl`}>{task.completed?( <span className='flex items-center gap-2'> <CircleCheck />Complete</span>) : ( <span className='flex items-center gap-2'> <Clock />Pending</span>)}</span>
      <Link className='mx-auto bg-blue-800 p-3 transition duration-150 rounded-2xl hover:bg-blue-900 hover:ring-2 hover:ring-white' href={`/task/${task.id}?imageUrl=${imageSrc}}`}>Check Tasks Details</Link>
    </div>
  )
}

export default TaskItem
