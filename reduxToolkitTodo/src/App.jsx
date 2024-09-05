
import AddTodos from './components/AddTodos'
import Todo from './components/Todo'

function App() {
  return (
    <>
    <div className="w-full h-screen bg-slate-900 flex justify-center items-center">
    <div className="w-[600px] p-5 h-auto ">
    <AddTodos/>
     <Todo/>
    </div>
    </div>
    </>
  )
}

export default App
