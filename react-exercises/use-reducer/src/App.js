import React, { useState } from "react";
import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  let dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default App;
