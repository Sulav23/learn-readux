import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/store";

import classes from "./Counter.module.css";

const Counter = () => {
  const inputRef = useRef();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  //dispatchng increment method stored in counterAction 
  const incrementHandler = () => {
    dispatch(counterAction.increament());
  };

  //dispatchng decrement method stored in counterAction 
  const decrementHandler = () => {
    dispatch(counterAction.decreament());
  };

  //dispatchng increase method stored in counterAction with 5 as a payload 
  const addFive = () => {
    dispatch(counterAction.increase(5));
  };

  //dispatchng increment function with user input as a payload
  const userAdd = () => {
    let value;
    const input = inputRef.current.value;

    if (input === "") {
      value = 0;
    } else {
      value = Number(input);
    }

    dispatch(counterAction.userAdd(value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>

        <button onClick={decrementHandler}>Decrement</button>

        <button onClick={addFive}>Add by 5</button>
      </div>

      <div>
        <input type="number" ref={inputRef} />
        <button onClick={userAdd}>Add</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
