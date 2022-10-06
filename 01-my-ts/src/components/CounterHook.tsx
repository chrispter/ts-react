import { useCounter } from '../hooks';
export const CounterHook = () => {
    
    const { counter, dicrease, increse } = useCounter(20);

    return (
        <>
            <h3>Counter with hook: <small>{ counter }</small></h3>
            <button 
                className='btn btn-primary mr-2'
                onClick={() => increse(1)}
            >+ 1</button>
            <button 
                className='btn btn-primary'
                onClick={() => dicrease(1)}    
            >- 1</button>
        </>
    )
}
