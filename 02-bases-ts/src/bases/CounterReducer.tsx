import { FC, useReducer } from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type CounterAction = 
    | { type: 'increaseBy',  payload: { value: number; } }
    | { type: 'reset' }

const counterReducerFn = ( state: CounterState, action: CounterAction ): CounterState => {
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

export const CounterReducer: FC = () => {
    const [state, dispatch] = useReducer(counterReducerFn, INITIAL_STATE);

    const increaseBy = ( value: number ) => {
        dispatch({ 
            type: 'increaseBy',
            payload: {
                value
            } 
        });
    };

    const handleReset = () => {
        dispatch({ type: 'reset' })
    };

    return (
        <>
            <h1>Counter Reducer: { state.counter } </h1>
            <pre>
                { JSON.stringify( state )}
            </pre>
            <button onClick={() => increaseBy(1) } >+ 1</button>
            <button onClick={() => increaseBy(5) } >+ 5</button>
            <button onClick={() => increaseBy(10) } >+ 10</button>

            <button onClick={ handleReset } >Reset</button>
        </>
    )
}
