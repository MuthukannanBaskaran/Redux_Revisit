import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducers";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);