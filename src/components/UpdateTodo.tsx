import React, { useState } from 'react'
import { type Todo } from '../models/model'
import closeIcon from '../assets/close-icon.svg'

interface Props {
  closeModal: () => void
  todo: Todo
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
export const UpdateTodo: React.FC<Props> = ({ closeModal, todo, handleSubmit }) => {
  const [title, setTitle] = useState(todo.title)
  const [category, setCategory] = useState(todo.category)
  const [description, setDescription] = useState(todo.description)
  return (
    <div>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-5/6 my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Editar ToDo</h3>
              <button
                className='p-1 ml-auto h-10 w-10 float-right text-3xl font-semibold text-black hover:text-red-700 hover:scale-105'
                onClick={closeModal}>
                <img src={closeIcon} className='w-10' alt='closeIcon' />
              </button>
            </div>
            <div className='relative p-6 flex-auto '>
              <form
                className='flex flex-col gap-y-3 w-full'
                onSubmit={handleSubmit}>
                <div className='flex justify-center w-full gap-x-5'>
                  <div className='flex w-1/4 pt-2 items-end gap-y-9 flex-col'>
                    <div>
                      <span className='font-bold'>Title:</span>
                    </div>
                    <div>
                      <span className='font-bold'>Category:</span>
                    </div>
                    <div>
                      <span className='font-bold'>Description:</span>
                    </div>
                  </div>
                  <div className='flex w-3/4 gap-5 flex-col'>
                    <input
                      type='text'
                      name='title'
                      placeholder='Title'
                      value={title}
                      required
                      className='h-10 rounded-md focus:outline-none pl-3 border'
                      onChange={e => {
                        setTitle(e.target.value)
                      }}
                    />
                    <input
                      type='text'
                      name='category'
                      placeholder='Category'
                      value={category}
                      required
                      className='h-10 rounded-md focus:outline-none pl-3 border'
                      onChange={e => {
                        setCategory(e.target.value)
                      }}
                    />
                    <input
                      type='text'
                      name='description'
                      placeholder='Description'
                      value={description}
                      required
                      className='h-10 rounded-md focus:outline-none pl-3 border'
                      onChange={e => {
                        setDescription(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className='flex items-center justify-center mt-6 p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent p-3 border border-transparent rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:border-red-500'
                    type='button'
                    onClick={closeModal}>
                    Close
                  </button>
                  <button
                    className='bg-sky-400 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='submit'>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-gray-900'></div>
    </div>
  )
}
