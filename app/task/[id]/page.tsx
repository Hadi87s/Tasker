
import React from 'react'

interface IParams {
    params: Promise<{id: number}>
}

const page = async({params}: IParams) => {
    const id = (await params).id 
  return (
    <div>
      {id}
    </div>
  )
}

export default page
