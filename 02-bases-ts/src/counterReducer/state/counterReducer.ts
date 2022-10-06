import { CounterAction } from "../actions";
import { CounterState } from "../interfaces";

export const counterReducerFn = ( state: CounterState, action: CounterAction ): CounterState => {
    switch( action.type ){
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0,
            }
        case 'increaseBy':
            return {
                changes: state.changes + 1,
                counter: state.counter + action.payload.value,
                previous: state.counter,
            }
        default:
            return state;
    }
}; 