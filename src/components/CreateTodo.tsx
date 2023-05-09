import React from 'react'
interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
export const CreateTodo: React.FC<Props> = ({
  handleSubmit
}) => {
  return (
    <div className="my-2">
      <div className='flex justify-center w-full'>
        <form onSubmit={handleSubmit}>
          <div className='w-full flex flex-col md:flex-row gap-3'>
            <div>
              <div>Título</div>
              <input
                type="text"
                name="title"
                placeholder="Título"
                required
                className="h-10 rounded-md focus:outline-none pl-3"
              />
            </div>
            <div>
              <div>Categoría</div>
              <input
                type="text"
                name="category"
                placeholder="Categoría"
                required
                className="h-10 rounded-md focus:outline-none pl-3"
              />
            </div>
            <div>
              <div>Descripción</div>
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                required
                className="h-10 rounded-md focus:outline-none pl-3"
              />
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button
              type="submit"
              className="px-3 mt-4 w-2/4 bg-blue-500 text-white h-10 hover:bg-blue-700 rounded-md"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
