import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/store";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
