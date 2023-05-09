import './App.css'
import CreateTodo from './components/CreateTodo'
import Header from './components/Header'
import ListTodos from './components/ListTodos'

function App () {
  return (
    <>
      <main className='w-full h-screen flex justify-center items-center'>
        <div className='w-3/4 bg-slate-300 rounded-lg shadow-lg border'>
          <Header />
          <CreateTodo />

          <div className='p-3'>
            <ListTodos />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
