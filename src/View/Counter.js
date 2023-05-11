import { observer } from "mobx-react-lite";
import React from "react";
import "../App.css";
import counter from "../Store/counter";

const Counter = observer(() => {
  return (
    <div className="counter">
      {"Count = " + counter.count}
      <div className="buttons">
        <button className="button" onClick={() => counter.increment()}>
          +
        </button>
        <button className="button" onClick={() => counter.decrement()}>
          -
        </button>
      </div>
    </div>
  );
});

export default Counter;
