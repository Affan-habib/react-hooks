import React, { useReducer } from "react";

const initialState = 100;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const Counter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>

      <h1>Count: {count}</h1>
      <button onClick = {() => dispatch('increment')}>Increment</button>
      <button onClick = {() => dispatch('decrement')}>Decrement</button>
      <button onClick = {() => dispatch('reset')}>Reset</button>

      <h1>Count2: {count2}</h1>
      <button onClick = {() => dispatch2('increment')}>Increment</button>
      <button onClick = {() => dispatch2('decrement')}>Decrement</button>
      <button onClick = {() => dispatch2('reset')}>Reset</button>

    </div>
  );
};

export default Counter3;