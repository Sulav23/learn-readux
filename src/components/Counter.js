import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const inputRef = useRef();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  //dispatchng increment functon
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  //dispatching decrement function
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  //dispatching increment function with amount as a payload
  const addFive = () => {
    dispatch({ type: "increase", amount: 5 });
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

    dispatch({ type: "userAdd", value });
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
