import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import Header from './components/Header'
import { ListTodos } from './components/ListTodos'

function App () {
  const [todos, setTodos] = useState([
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
  ])

  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string

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
  }
  return (
    <>
      <div className="w-full min-h-screen h-full py-20 px-5 flex justify-center items-center">
        <div className="w-3/4 bg-slate-300 rounded-lg shadow-lg border">
          <Header />
          <CreateTodo handleSubmit={handleSubmit} />

          <div className="p-3">
            <ListTodos todos={todos} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
