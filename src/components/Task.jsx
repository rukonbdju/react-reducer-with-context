import { useContext, useState } from "react"
import { TaskContext } from "../context/ContextProvider"

const Task = ({ task }) => {
    const { dispatch } = useContext(TaskContext)

    const [isEdit, setIsEdit] = useState(false)
    const [newText, setNewText] = useState(task.text)

    const handleSaveChange = () => {
        dispatch({
            type: 'edit',
            task: { ...task, text: newText }
        })
        setIsEdit(false)
    }

    const handleDeleteTask = (id) => {
        dispatch({
            type: 'delete',
            id
        })
    }

    return (
        <div className="container">
            {isEdit ? <input
                onChange={(e) => setNewText(e.target.value)}
                value={newText} type="text" />
                : <p>{task.text}</p>}
            {isEdit ? <button onClick={handleSaveChange}>Save</button>
                : <button onClick={() => setIsEdit(true)}>Edit</button>}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
    )
}
export default Task