import './App.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch({type: 'INC'})
  }

  const decrement = () => {
    dispatch({type: 'DEC'})
  }

  const addby = () => {
    dispatch({type: 'ADD', payload: 10})
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addby}>Add Value 10</button>
    </div>
  );
}

export default App;
