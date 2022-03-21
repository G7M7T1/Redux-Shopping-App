import './App.css';
import {useSelector} from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter)

  const increment = () => {

  }

  const decrement = () => {

  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
