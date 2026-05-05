import { COUNTER_ACTIONS, type CounterAction } from "../types/actionTypes";

type CounterState = { counter: number; };

const initialState: CounterState = { counter: 0 }

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT:
            return { counter: state.counter + 1 };
        case COUNTER_ACTIONS.DECREMENT:
            return { counter: state.counter - 1 };
        case COUNTER_ACTIONS.RESET:
            return initialState;
        case COUNTER_ACTIONS.DOUBLE:
            return { counter: state.counter + 2 };
        default:
            return state;
    }
}

export default counterReducer;