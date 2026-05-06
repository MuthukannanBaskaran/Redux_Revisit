const initialState = {
    todos: [{ a: 1 }, { b: 1 }]
}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FIRST":
            return { ...state, ...payload }
        default:
            return state
    }
}

export default todoReducer;