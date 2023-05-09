import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import Header from './components/Header'
import { ListTodos } from './components/ListTodos'
import { type Todo } from './models/model'
import { UpdateTodo } from './components/UpdateTodo'

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

  const getTodos = () => {
    const getStoreTodos = JSON.parse(localStorage.getItem('todos'))
    getStoreTodos !== null || getStoreTodos !== '' ? setTodos(getStoreTodos) : setTodos(mockTodos)
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

  return (
    <>
      <div className="w-full min-h-screen h-full py-20 px-5 flex justify-center items-center">
        <div className="w-3/4 bg-slate-300 rounded-lg shadow-lg border">
          <Header />
          <CreateTodo handleSubmit={handleSubmitCreate} />

          <div className="p-3">
            <ListTodos
              todos={todos}
              handleSetComplete={handleSetComplete}
              handleDelete={handleDelete}
              handleUpdate={openModal}
            />
          </div>
        </div>
      </div>
      {
        isUpdating && <UpdateTodo todo={auxTodo} closeModal={closeModal} updateTodo={updateTodo} />
      }
    </>
  )
}

export default App
