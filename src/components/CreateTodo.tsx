import React, { useState } from 'react'

export default function CreateTodo () {

  return (
    <div className='my-2 flex justify-center gap-3'>
      <div>
        <div>Titulo</div>
        <input type="text" id='title' className='h-10 rounded-md focus:outline-none pl-3' />
      </div>
      <div>
        <div>Categoria</div>
        <input type="text" id='category' className='h-10 rounded-md focus:outline-none pl-3' />
      </div>
      <div>
        <div>Descripción</div>
        <input type="text" id='description' className='h-10 rounded-md focus:outline-none pl-3' />
      </div>
    </div>
  )
}
