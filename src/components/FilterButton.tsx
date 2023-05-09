import React from 'react'
interface Props {
  action: () => void
  active: string
  filter: string
}
export const FilterButton: React.FC<Props> = ({ action, active, filter }) => {
  return (
      <button onClick={action} className={' hover:text-white cursor-pointer  transition-all duration-300 ease-in-out ' + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}
      >
        {filter}
      </button>
  )
}
