import { createContext, useReducer } from "react";
import taskReducer from "../reducer/taskReducer";

export const TaskContext = createContext()

const ContextProvider = ({ children }) => {
    const initialTasks = [
        { id: 0, text: 'Visit Kafka Museum', done: true },
        { id: 1, text: 'Watch a puppet show', done: false },
        { id: 2, text: 'Lennon Wall pic', done: false }
    ];

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export default ContextProvider;