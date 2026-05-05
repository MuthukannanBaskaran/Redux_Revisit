import { useDispatch, useSelector } from "react-redux"
import { COUNTER_ACTIONS } from "../types/actionTypes";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div><p>Counter: {counter}</p></div>
                <div>
                    <button onClick={() => dispatch({ type: COUNTER_ACTIONS.INCREMENT })}>Increment</button>
                    <button onClick={() => dispatch({ type: COUNTER_ACTIONS.RESET })}>Reset</button>
                    <button onClick={() => dispatch({ type: COUNTER_ACTIONS.DECREMENT })}>Decrement</button>
                    <button onClick={() => dispatch({ type: COUNTER_ACTIONS.DOUBLE })}>DOUBLE</button>
                </div>
            </div>
        </>
    )
}

export default Counter