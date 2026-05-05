export const COUNTER_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    DOUBLE: 'DOUBLE'
} as const;

type ActionType = typeof COUNTER_ACTIONS[keyof typeof COUNTER_ACTIONS];

export type CounterAction = {
    type: ActionType;
};