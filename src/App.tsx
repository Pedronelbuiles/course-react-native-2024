import { Counter, CounterWithHook, LoginPage } from './components';
import { UsersPage } from './components/UsersPage';
import { 
  BasicFunctions,
  BasicTypes,
  ObjectLiterals
} from './typescript';

function App() {

  return (
    <main>
      <h1>Introduction to React with TS</h1>

      <UsersPage />
      <hr />
      <LoginPage />
      <hr />
      <CounterWithHook />
      <hr />
      <Counter />
      <hr />
      <BasicFunctions />
      <hr />
      <ObjectLiterals />
      <hr />
      <BasicTypes />
    </main>
  )
}

export default App
