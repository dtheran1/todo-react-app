import React from "react";
import { type Todo } from "../models/model";

interface Props {
  todos: Todo[];
  handleSetComplete: (id: number) => void;
  handleDelete: (id: number) => void;
  handleUpdate: (todo: Todo) => void;
}

export const ListTodos: React.FC<Props> = ({
  todos,
  handleSetComplete,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
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
            {todos.map((todo) => (
              <tr key={todo.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex items-center">
                    {todo.status ? (
                      <div
                        onClick={() => {
                          handleSetComplete(todo.id);
                        }}
                        className="bg-green-700  p-1 rounded-full cursor-pointer"
                      >
                        <img
                          className="h-4 w-4 "
                          src="/check-icon.svg"
                          alt="Check Icon"
                        />
                      </div>
                    ) : (
                      <span
                        onClick={() => {
                          handleSetComplete(todo.id);
                        }}
                        className={
                          "border border-gray-500 border-solid p-3 rounded-full cursor-pointer"
                        }
                      ></span>
                    )}
                  </div>
                </th>
                <td className="px-6 py-4">
                  <p className={todo.status ? "line-through" : ""}>
                    {todo.title}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className={todo.status ? "line-through" : ""}>
                    {todo.category}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className={todo.status ? "line-through" : ""}>
                    {todo.description}
                  </p>
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button
                    onClick={() => {
                      handleUpdate(todo);
                    }}
                  >
                    <img
                      className="h-4 w-4 hover:scale-110"
                      src="/edit-icon.svg"
                      alt="Edit Icon"
                    />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  >
                    <img
                      className="h-4 w-4 hover:scale-110"
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
  );
};
