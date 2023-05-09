import React from 'react'

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const CreateTodo: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <div className="my-2 flex sm:flex-col lg:flex-row justify-center gap-3">
      <form onSubmit={handleSubmit}>
        <div>
          <div>Titulo</div>
          <input
            type="text"
            name="title"
            className="h-10 rounded-md focus:outline-none pl-3"
          />
        </div>
        <div>
          <div>Categoria</div>
          <input
            type="text"
            name="category"
            className="h-10 rounded-md focus:outline-none pl-3"
          />
        </div>
        <div>
          <div>Descripción</div>
          <textarea
            name="description"
            className="h-10 rounded-md focus:outline-none pl-3"
          />
        </div>
        <button
          type="submit"
          className="px-3 bg-blue-500 text-white h-10 hover:bg-blue-700 rounded-md"
        >
          Crear
        </button>
      </form>
    </div>
  )
}
