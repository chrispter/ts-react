import { Counter, CounterHook, Form, Login, Users } from './components';
import { Functions, ObjectsLiterals, TypesBasics } from './typescript';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduction TS</h1>
      <hr />
      <TypesBasics />
      <hr />
      <ObjectsLiterals />
      <hr />
      <Functions />
      <hr />
      <Counter />
      <hr />
      <CounterHook />
      <hr />
      <Login />
      <hr />
      <Users />
      <hr />
      <Form />
    </div>
  )
}

export default App;