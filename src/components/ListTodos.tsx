import React from 'react'
const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    status: true,
    category: 'Work',
    description: 'Lorem'
  },
  {
    id: 2,
    title: 'Todo 2',
    status: false,
    category: 'Home',
    description: 'Lorem'
  },
  {
    id: 3,
    title: 'Todo 3',
    status: false,
    category: 'School',
    description: 'Lorem'
  }
]
export default function ListTodos () {
  return (
    <div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">
                          Titulo
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Categoria
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Descripción
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Acciones
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {mockTodos.map(todo => (
                    <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {todo.status ? 'Activo' : 'Inactivo'}
                            <input
                              className='toggle'
                              checked={todo.status}
                              type='checkbox'
                              onChange={(e) => { setCompleted(id, e.target.checked) }}
                            />
                        </th>
                        <td className="px-6 py-4">
                            {todo.title}
                        </td>
                        <td className="px-6 py-4">
                            {todo.category}
                        </td>
                        <td className="px-6 py-4">
                          {todo.description}
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                          <button>
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          <button>
                            <i className="fa-sharp fa-regular fa-trash"></i>
                          </button>
                        </td>
                    </tr>
                  ))}
              </tbody>
          </table>
      </div>

      <div className='mt-3 flex gap-2'>ToDos: <p className='w-5 h-5 rounded-full bg-red-400 flex justify-center items-center'>{mockTodos.length}</p></div>
    </div>
  )
}
