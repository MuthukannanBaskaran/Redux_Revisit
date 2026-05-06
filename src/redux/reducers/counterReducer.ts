import { DECREMENT, INCREMENT, RESET, type CounterAction, type CounterState } from "../types/counterTypes";

const initialState: CounterState = { counter: 0 }

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };
        case DECREMENT:
            return { counter: state.counter - 1 };
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default counterReducer;