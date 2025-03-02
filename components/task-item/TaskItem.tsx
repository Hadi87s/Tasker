import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ITask {
task: Todo;
}

const TaskItem = ({task}: ITask) => {
  return (
    <div className='bg-zinc-800 p-4 rounded-3xl flex flex-col gap-2 w-[400px]'>
      {/* <Image src="" alt="" /> */}
      <h2 className=''>{task.title}</h2>
      <span className={`p-2 text-sm w-fit ${task.completed? " bg-green-600": " bg-red-600"} font-bold rounded-2xl`}>{task.completed? "complete" : "pending"}</span>
      <Link href={`/task/${task.id}`}>Check Tasks Details</Link>
    </div>
  )
}

export default TaskItem
