import { useContext, useState } from "react"
import { TaskContext } from "../context/ContextProvider"

const AddTask = () => {
    const { tasks, dispatch } = useContext(TaskContext)
    const [text, setText] = useState('')

    const handleAddTask = (text) => {
        dispatch({
            type: 'add',
            id: tasks.length + 2,
            text: text,
            done: false
        })
    }
    return (
        <div className="container">
            <input
                placeholder="add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text" name="text" id="text"
            />
            <button onClick={() => {
                handleAddTask(text)
                setText('')
            }}>ADD</button>
        </div>
    )
}
export default AddTask