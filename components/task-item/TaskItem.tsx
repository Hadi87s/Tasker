"use client";
import React from 'react'
import Link from 'next/link';
import Image from "next/image"
import { useRouter } from "next/navigation";

interface ITask {
  task: Todo;
  imageSrc?: string;
}

const TaskItem = ({task,imageSrc}: ITask) => {
  const router = useRouter();
  const handleOnClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(`/task/${task.id}?imageUrl=${encodeURIComponent(imageSrc || "")}}`);
  }

  return (
    <div className='bg-zinc-800 p-4 rounded-3xl flex flex-col gap-2 w-[400px] h-fit'>
      <Image 
      src={imageSrc || ""} 
      alt="someAltText"
      width={500}
      height={300}
      layout="responsive" 
      className='rounded-2xl bg-cover'
      />

      <h2 className=''>{task.title}</h2>
      <span className={`p-2 text-sm w-fit ${task.completed? " bg-green-600": " bg-red-600"} font-bold rounded-2xl`}>{task.completed? "complete" : "pending"}</span>
      <Link onClick={handleOnClick} className='mx-auto bg-blue-800 p-3 transition duration-150 rounded-2xl hover:bg-blue-900 hover:ring-2 hover:ring-white' href={`/task/${task.id}`}>Check Tasks Details</Link>
    </div>
  )
}

export default TaskItem
