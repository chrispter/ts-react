import { FC, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect: FC = () => {
    const [counter, setCounter] = useState<number>(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) );
    };

    useEffect(() => {
        if( counter < 10 ) return;

        console.log('%cMaximo number', 'color: red; background-color: white;');

        const timeline = gsap.timeline();
        timeline
            .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });


    }, [counter])
    

    return (
        <>
            <h1>Counter Effect</h1>
            <h2 ref={ counterElement }>{ counter }</h2>
            <button onClick={ handleClick } >+1</button>
        </>
    )
}
