import React, { useEffect, useMemo, useRef, useState } from 'react'
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
  const [filter, setFilter] = useState<'all' | 'completed' | 'active' >('all')
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos)
  const [search, setSearch] = useState('')

  const getTodos = () => {
    const getStoreTodos = JSON.parse(localStorage.getItem('todos'))
    getStoreTodos !== null || getStoreTodos !== ''
      ? setTodos(getStoreTodos)
      : setTodos(filteredTodos)
  }

  useEffect(() => {
    getTodos()
  }, [])

  const handleSubmitCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string

    if (!title.trim() || !category.trim() || !description.trim()) return

    const newTodo = {
      id: todos.length + 1,
      title,
      status: false,
      category,
      description
    }
    const todosList = [...todos]
    todosList.push(newTodo)

    setTodos(todosList)
    localStorage.setItem('todos', JSON.stringify(todosList))
    form.reset()
  }
  const handleSetComplete = (id: number) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status }
      }
      return todo
    })

    setTodos(updatedList)
    localStorage.setItem('todos', JSON.stringify(updatedList))
  }
  const updateTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string
    if (!title.trim() || !category.trim() || !description.trim()) return
    const todoFiltered = todos.findIndex((todo) => todo.id === auxTodo.id)
    const updatedTodo = {
      ...auxTodo,
      title,
      category,
      description
    }
    const updatedList = [...todos]
    updatedList[todoFiltered] = updatedTodo
    setTodos(updatedList)
    localStorage.setItem('todos', JSON.stringify(updatedList))
    form.reset()
    setIsUpdating(false)
  }
  const handleDelete = (id: number) => {
    const updatedList = todos.filter((todo) => todo.id !== id)
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
  }, [filter, todos])

  const searchTodo = useMemo(() => {
    if (typeof search === 'string' && search.length > 0) {
      return filteredTodos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()) || todo.category.toLowerCase().includes(search.toLowerCase()) || todo.description.toLowerCase().includes(search.toLowerCase()))
    }
    return filteredTodos

    // return typeof search === 'string' && search.length > 0
    //   ? filteredTodos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()) || todo.category.toLowerCase().includes(search.toLowerCase()) || todo.description.toLowerCase().includes(search.toLowerCase()))
    //   : filteredTodos
  }, [search])

  return (
    <>
      <div className="w-full font-inter min-h-screen h-full py-20 px-5 flex justify-center items-center">
        <div className="w-3/4 bg-slate-300 rounded-lg shadow-lg border">
          <Header />
          <CreateTodo handleSubmit={handleSubmitCreate} />

          <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 border">
            <p className="text-gray-400 text-sm">
              {filteredTodos.length} items left
            </p>

            <input
              value={search}
              type='text'
              placeholder='Buscar ToDo...'
              onChange={(e) => { setSearch(e.target.value) }}
            />

            <div className="flex items-center space-x-2">
              <FilterButton action={() => { showAllTodos() }} active={filter} filter='All'/>
              <FilterButton action={() => { showActiveTodos() }} active={filter} filter='Active' />
              <FilterButton action={() => { showCompletedTodos() }} active={filter} filter='Completed' />
            </div>
          </div>

          <div className="p-3">
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
          updateTodo={updateTodo}
        />
      )}
    </>
  )
}

export default App
