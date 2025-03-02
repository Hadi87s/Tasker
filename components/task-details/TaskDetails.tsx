"use client";
import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { div } from 'framer-motion/client';
interface IDetails {
  task: Todo;
  src: string;
}
const TaskDetails = ({task, src} : IDetails) => {
  const router = useRouter();

  return (
    <>
    {!src && <div  className=' p-4  text-xl lg:text-4xl font-bold absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-10%] rounded-2xl text-blue-800'>Image Not found</div>}
      <Link onClick={(e)=>{
          e.preventDefault();
          router.back();
      }} className='z-30 absolute h-fit w-fit transition duration-200 inset-4 px-4 py-2 bg-blue-800 hover:bg-blue-900 hover:ring-2 hover:ring-white rounded-2xl' href="/tracker">back</Link>
    <div className='flex flex-col absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group'>
      <div className='w-[95vw] max-w-[500px] max-h-[100vh] relative'>
        <div className='absolute inset-0 bg-gradient-to-t from-black to-black/10 z-10 rounded-3xl'></div>
        <Image className='max-h-[90vh] rounded-3xl' src={src || "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Random Image' width={1000} height={700} priority={false}></Image>
      <div className='transition duration-200  absolute bottom-10 left-5 z-20 group-hover:-translate-y-5 '>
        <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl p-2 mb-2 font-bold'>{task.title}</h1>
        <span className='p-4 sm:text-lg md:text-xl'>{`Task ${task.id} is ${task.completed? "Complete" : "Pending"}`}</span>
      </div>
      </div>
    </div>
    </>
  )
}

export default TaskDetails
