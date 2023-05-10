import logoReact from '../assets/react.svg'
export default function Header () {
  return (
    <header className='flex flex-col  items-center justify-center gap-3 pt-10'>
      <img src={logoReact} className='w-20' alt='' />
      <h1 className='text-center font-inter py-3 font-extrabold text-7xl text-gray-700'>
        ToDo React App
      </h1>
    </header>
  )
}
