import React from 'react'

export const TypesBasics = () => {

  let name: string = 'Mango';
  const age: number =  23;
  const itsActive: boolean = true;

  const powers: string[] = ['Velociting', 'Fligthing', 'Swinging']; 

  return (
    <>
        <h3>Basics Types</h3>
        { name },  { age } { itsActive ? 'Active' : 'Inactive' }
        <br />
        { powers.join(', ') }
    </>
  )
}
