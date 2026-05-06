import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../redux/actions/counterActions";
import type { RootState } from "../redux/types/counterTypes";

const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div><p>Counter: {counter}</p></div>
                <div>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    <button onClick={() => dispatch(reset())}>Reset</button>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Counter