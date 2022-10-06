import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increse = (number: number) => {
        setCounter( counter + number);
    }

    const dicrease = (number: number) => {
        setCounter( counter - number);
    }

    return (
        <>
            <h3>Counter <small>{ counter }</small></h3>
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
