import React from 'react'
import { type Todo } from '../models/model'

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
      <div className="relative overflow-x-auto">
        <table className="w-full text-lg text-left text-gray-900 rounded-md">
          <thead className="text-black uppercase bg-gradient-to-b from-cyan-300 to-cyan-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                Done
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="bg-cyan-900/50 border-b text-white font-semibold">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex items-center">
                    {todo.status
                      ? (
                      <div
                        onClick={() => {
                          handleSetComplete(todo.id)
                        }}
                        className="bg-green-700  p-1 rounded-full cursor-pointer"
                      >
                        <img
                          className="h-4 w-4 "
                          src="/check-icon.svg"
                          alt="Check Icon"
                        />
                      </div>
                        )
                      : (
                      <span
                        onClick={() => {
                          handleSetComplete(todo.id)
                        }}
                        className={
                          'border border-gray-500 border-solid p-3 rounded-full cursor-pointer'
                        }
                      ></span>
                        )}
                  </div>
                </th>
                <td className="px-6 py-4">
                  <p className={todo.status ? 'line-through' : ''}>
                    {todo.title}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className={todo.status ? 'line-through' : ''}>
                    {todo.category}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className={todo.status ? 'line-through' : ''}>
                    {todo.description}
                  </p>
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button
                    onClick={() => {
                      handleUpdate(todo)
                    }}
                    className='border rounded-md p-2 bg-yellow-200 hover:scale-110'
                  >
                    <img
                      className="h-5 w-5"
                      src="/edit-icon.svg"
                      alt="Edit Icon"
                    />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(todo.id)
                    }}
                    className='border rounded-md p-2 bg-red-200 hover:scale-110'
                  >
                    <img
                      className="h-5 w-5"
                      src="/delete-icon.svg"
                      alt="Delete Icon"
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
