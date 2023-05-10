import React from 'react'
import { type Todo } from '../models/model'
import checkIcon from '../assets/check-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'
import editIcon from '../assets/edit-icon.svg'
interface Props {
  todos: Todo[]
  handleSetComplete: (id: number) => void
  handleDelete: (id: number) => void
  handleUpdate: (todo: Todo) => void
}

export const ListTodos: React.FC<Props> = ({
  todos,
  handleSetComplete,
  handleDelete,
  handleUpdate
}) => {
  return (
    <div>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-lg table-fixed text-left text-gray-900 '>
          <thead className='text-white uppercase bg-gradient-to-b from-gray-400 to-gray-800'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Done
              </th>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3 truncate'>
                Category
              </th>
              <th scope='col' className='px-6 py-3 truncate'>
                Description
              </th>
              <th scope='col' className='px-6 py-3 truncate'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id} className='border-b text-white font-semibold'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                  <div className='flex items-center'>
                    {todo.status
                      ? (
                      <div
                        onClick={() => {
                          handleSetComplete(todo.id)
                        }}
                        className='bg-green-700 p-1 w-7 h-7 rounded-full cursor-pointer'>
                        <img
                          className='h-5 w-5'
                          src={checkIcon}
                          alt='Check Icon'
                        />
                      </div>
                        )
                      : (
                      <span
                        onClick={() => {
                          handleSetComplete(todo.id)
                        }}
                        className={
                          'border border-gray-800 border-solid p-3 rounded-full cursor-pointer'
                        }></span>
                        )}
                  </div>
                </th>
                <td className='px-6 py-4 truncate'>
                  <p className={todo.status ? 'line-through text-green-600' : ''}>
                    {todo.title}
                  </p>
                </td>
                <td className='px-6 py-4 truncate'>
                  <p className={todo.status ? 'line-through text-green-600' : ''}>
                    {todo.category}
                  </p>
                </td>
                <td className='px-6 py-4 w-20 truncate'>
                  <p className={todo.status ? 'line-through text-green-600' : ''}>
                    {todo.description}
                  </p>
                </td>
                <td className='px-3 md:px-6 py-2 md:py-4 flex flex-col md:flex-row gap-2'>
                  <button
                    onClick={() => {
                      handleUpdate(todo)
                    }}
                    className='border rounded-md w-10 p-2 bg-yellow-200 hover:scale-110'>
                    <img className='h-5 w-5' src={editIcon} alt='Edit Icon' />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(todo.id)
                    }}
                    className='border rounded-md w-10 p-2 bg-red-200 hover:scale-110'>
                    <img
                      className='h-5 w-5'
                      src={deleteIcon}
                      alt='Delete Icon'
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
