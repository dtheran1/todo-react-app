import React from "react";
interface Props {
  totalTodos: number;
}
export const Actions: React.FC<Props> = ({ totalTodos }) => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600"'>
      <div className="mt-3 flex gap-2">
        ToDos:
        <p className="w-5 h-5 rounded-full bg-red-400 flex justify-center items-center">
          {totalTodos}
        </p>
        <p className="text-gray-400 text-sm">{totalTodos} items left</p>
      </div>

      <div>
        <button
          onClick={action}
          className={
            ` hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
            (active.toLowerCase().includes(filter.toLowerCase())
              ? "text-blue-400"
              : "text-gray-400")
          }
        >
          {filter}
        </button>
      </div>
    </div>
  );
};
