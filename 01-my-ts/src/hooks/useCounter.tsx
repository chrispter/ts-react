import { useState } from "react";

export const useCounter = ( initial: number = 10 ) => {
    const [counter, setCounter] = useState<number>(initial);

    const increse = (number: number) => {
        setCounter( counter + number);
    }

    const dicrease = (number: number) => {
        setCounter( counter - number);
    }

    return {
        counter,
        increse,
        dicrease,
    }
}
