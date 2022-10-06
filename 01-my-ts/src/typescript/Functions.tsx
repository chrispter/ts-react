import React from 'react'

export const Functions = () => {

    const plus = (a: number, b: number): number => {
        return a + b;
    }

  return (
    <>
        <h3>Functions</h3>
        <span>Total: { plus(2, 3) }</span>
    </>
  )
}
