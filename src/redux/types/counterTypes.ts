export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export type CounterState = {
    counter: number;
};

export type CounterAction = {
    type: string;
};

export const initialState: CounterState = {
    counter: 0
};

export type RootState = {
    counter: number;
};