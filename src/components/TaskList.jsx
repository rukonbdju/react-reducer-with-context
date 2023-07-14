import { useContext } from "react"
import Task from "./Task"
import { TaskContext } from "../context/ContextProvider"

const TaskList = () => {
    const { tasks } = useContext(TaskContext)
    return (
        <div>
            {tasks.map(task => <Task task={task} key={task.id}></Task>)}
        </div>
    )
}
export default TaskList