import React, { useState } from 'react'
import { type Todo } from '../models/model'

interface Props {
  closeModal: () => void
  todo: Todo
  updateTodo: (event: React.FormEvent<HTMLFormElement>) => void
}
export const UpdateTodo: React.FC<Props> = ({
  closeModal,
  todo,
  updateTodo
}) => {
  const [title, setTitle] = useState(todo.title)
  const [category, setCategory] = useState(todo.category)
  const [description, setDescription] = useState(todo.description)
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Editar ToDo</h3>
              <button className="p-1 ml-auto h-10 w-10 float-right text-3xl font-semibold text-black hover:text-red-700 hover:scale-105" onClick={closeModal}>
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
            <div className="relative p-6 flex-auto ">
              <form className="flex flex-col gap-y-3 w-full" onSubmit={updateTodo}>
                <div className="flex items-center gap-5 justify-center">
                  <div className="">
                    <span className="font-bold">Titulo</span>
                  </div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    value={title}
                    required
                    className="h-10 rounded-md focus:outline-none pl-3 border"
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                  />
                </div>
                <div className="flex items-center gap-5 justify-center">
                  <div className="">
                    <span className="font-bold">Categoria</span>
                  </div>
                  <input
                    type="text"
                    name="category"
                    placeholder="Categoria"
                    value={category}
                    required
                    className="h-10 rounded-md focus:outline-none pl-3 border"
                    onChange={(e) => {
                      setCategory(e.target.value)
                    }}
                  />
                </div>
                <div className="flex items-center gap-5 justify-center">
                  <div className="">
                    <span className="font-bold">Descripción</span>
                  </div>
                  <input
                    type="text"
                    name="description"
                    placeholder="Descripción"
                    value={description}
                    required
                    className="h-10 rounded-md focus:outline-none pl-3 border"
                    onChange={(e) => {
                      setDescription(e.target.value)
                    }}
                  />
                </div>
                <div className="flex items-center justify-center mt-6 p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent p-3 border border-transparent rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:border-red-500"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}
