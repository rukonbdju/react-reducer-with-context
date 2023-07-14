
import { useContext, useReducer} from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import ContextProvider from './context/ContextProvider';
function App() {

  return (
    <ContextProvider>
      <AddTask></AddTask>
      <TaskList></TaskList>
    </ContextProvider>
  )
}

export default App
