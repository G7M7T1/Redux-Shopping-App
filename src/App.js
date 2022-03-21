import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {actions} from "./store";

function App() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment(1))
  }

  const decrement = () => {
    dispatch(actions.decrement(1))
  }

  const addValue = () => {
    dispatch(actions.addValue(10))
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addValue}>Add Value 10</button>
    </div>
  );
}

export default App;
