import React from 'react'
interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
export const CreateTodo: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <div className='my-2'>
      <div className='flex justify-center w-full'>
        <form onSubmit={handleSubmit}>
          <div className='w-full flex flex-col md:flex-row gap-3'>
            <div>
              <div className='font-bold'>Title:</div>
              <input
                type='text'
                name='title'
                placeholder='Title'
                required
                className='h-10 rounded-md focus:outline-none pl-3'
              />
            </div>
            <div>
              <div className='font-bold'>Category:</div>
              <input
                type='text'
                name='category'
                placeholder='Category'
                required
                className='h-10 rounded-md focus:outline-none pl-3'
              />
            </div>
            <div>
              <div className='font-bold'>Description:</div>
              <input
                type='text'
                name='description'
                placeholder='Descripción'
                required
                className='h-10 rounded-md focus:outline-none pl-3'
              />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button
              type='submit'
              className='p-3 text-center mt-4 w-2/4 bg-cyan-600 hover:bg-cyan-900 text-white font-bold text-xl rounded-md hover:shadow-xl transition duration-150 ease-out'>
              Create a new ToDo!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
