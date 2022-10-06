import { Counter, CounterBy, CounterEffect, CounterHook, CounterReducer, CounterReducerRefactor } from "./bases";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={ 15 } />
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      <hr />
      <CounterReducer />
      <hr />
      <CounterReducerRefactor />
    </>
  );
}

export default App;
