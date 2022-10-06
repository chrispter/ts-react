import { FC, useReducer } from "react";
import { doIncreaseBy, doReset } from "../counterReducer/actions";
import { CounterState } from "../counterReducer/interfaces";
import { counterReducerFn } from "../counterReducer/state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerRefactor: FC = () => {
    const [state, dispatch] = useReducer(counterReducerFn, INITIAL_STATE);

    const increaseBy = ( value: number ) => {
        dispatch( doIncreaseBy( value ) );
    };

    const handleReset = () => {
        dispatch( doReset() );
    };

    return (
        <>
            <h1>Counter Reducer Segmentado: { state.counter } </h1>
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
