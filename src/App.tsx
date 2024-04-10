import { Counter, CounterWithHook } from './components';
import { 
  BasicFunctions,
  BasicTypes,
  ObjectLiterals
} from './typescript';

function App() {

  return (
    <main>
      <h1>Introduction to React with TS</h1>

      <BasicTypes />
      <hr />
      <ObjectLiterals />
      <hr />
      <BasicFunctions />
      <hr />
      <Counter />
      <hr />
      <CounterWithHook />
    </main>
  )
}

export default App
