
interface Teacher {
    name: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    houseNumber: number;
}

export const ObjectsLiterals = () => {

    const teacher: Teacher = {
        name: 'Fernando',
        age: 35,
        address: {
            country: 'Canada',
            houseNumber: 356 
        }
    }

  return (
    <>
        <h3>Object Literals</h3>
        <code>
            { JSON.stringify( teacher, null, 2 ) }
        </code>
    </>
  )
}
