import React, { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import Header from './components/Header'
import { ListTodos } from './components/ListTodos'
import { type Todo } from './models/model'
import { UpdateTodo } from './components/UpdateTodo'
import { mockTodos } from './utils'
import { FilterButton } from './components/FilterButton'

function App () {
  const [auxTodo, setAuxTodo] = useState<Todo>({
    id: 0,
    title: '',
    status: false,
    category: '',
    description: ''
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [todos, setTodos] = useState(mockTodos)
  const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all')
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos)
  const [search, setSearch] = useState('')

  const getTodos = () => {
    const getStoreTodos = JSON.parse(localStorage.getItem('todos'))
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (getStoreTodos ?? false) {
      setTodos(getStoreTodos)
    } else {
      setTodos(mockTodos)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const todosList = [...todos]
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!title.trim() || !category.trim() || !description.trim()) return

    if (!isUpdating) {
      const newTodo = {
        id: todos.length + 1,
        title,
        status: false,
        category,
        description
      }
      todosList.push(newTodo)
    } else {
      const todoFiltered = todos.findIndex(todo => todo.id === auxTodo.id)
      const updatedTodo = {
        ...auxTodo,
        title,
        category,
        description
      }
      todosList[todoFiltered] = updatedTodo
      setIsUpdating(false)
    }
    setTodos(todosList)
    localStorage.setItem('todos', JSON.stringify(todosList))
    form.reset()
  }
  const handleSetComplete = (id: number) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }
      }
      return todo
    })

    setTodos(updatedList)
    localStorage.setItem('todos', JSON.stringify(updatedList))
  }
  const handleDelete = (id: number) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
    localStorage.setItem('todos', JSON.stringify(updatedList))
  }
  const openModal = (todoUpdated: Todo) => {
    setIsUpdating(true)
    setAuxTodo(todoUpdated)
  }
  const closeModal = () => {
    setIsUpdating(false)
  }
  const showAllTodos = () => {
    setFilter('all')
  }
  const showCompletedTodos = () => {
    setFilter('completed')
  }
  const showActiveTodos = () => {
    setFilter('active')
  }

  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos)
    } else if (filter === 'active') {
      const activeTodos = todos.filter(todo => !todo.status)
      setFilteredTodos(activeTodos)
    } else if (filter === 'completed') {
      const completedTodos = todos.filter(todo => todo.status)
      setFilteredTodos(completedTodos)
    }
    if (search.trim().length > 0) {
      const searchTodo = filteredTodos.filter(
        todo =>
          todo.title.toLowerCase().includes(search.toLowerCase()) ||
          todo.category.toLowerCase().includes(search.toLowerCase()) ||
          todo.description.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredTodos(searchTodo)
    }
  }, [search, filter, todos])

  return (
    <>
      <div className='w-full font-inter min-h-screen h-full py-20 px-1 md:px-5 flex justify-center items-center'>
        <div className='w-full md:w-3/4 rounded-lg shadow-2xl border-b bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>
          <Header />
          <CreateTodo handleSubmit={handleSubmit} />

          <div className='flex flex-col md:flex-row items-center text-lg justify-between mt-7 p-4 bg-gray-700/50 border-b rounded-lg mx-6'>
            <p className='text-gray-400'>{filteredTodos.length} items left</p>

            <input
              value={search}
              type='text'
              placeholder='Search a ToDo...'
              onChange={e => {
                setSearch(e.target.value)
              }}
              className='h-10 rounded-full px-3 focus:outline-none bg-transparent focus:bg-gray-500 focus:w-80 focus:outline-teal-900 placeholder:text-white placeholder:text-center text-white transition duration-150 ease-out'
            />

            <div className='flex items-center space-x-2'>
              <FilterButton
                action={() => {
                  showAllTodos()
                }}
                active={filter}
                filter='All'
              />
              <FilterButton
                action={() => {
                  showActiveTodos()
                }}
                active={filter}
                filter='Active'
              />
              <FilterButton
                action={() => {
                  showCompletedTodos()
                }}
                active={filter}
                filter='Completed'
              />
            </div>
          </div>

          <div className='p-2 md:p-6'>
            <ListTodos
              todos={filteredTodos}
              handleSetComplete={handleSetComplete}
              handleDelete={handleDelete}
              handleUpdate={openModal}
            />
          </div>
        </div>
      </div>
      {isUpdating && (
        <UpdateTodo
          todo={auxTodo}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  )
}

export default App
