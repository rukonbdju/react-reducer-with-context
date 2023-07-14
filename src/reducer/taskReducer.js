const taskReducer = (tasks, action) => {
    switch (action.type) {
        case 'add': {
            return [
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
                ...tasks
            ];
        }
        case 'edit': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'delete': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default taskReducer;