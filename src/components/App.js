import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../redux/actions";

import "./../styles/App.css";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default App;