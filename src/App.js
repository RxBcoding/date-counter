import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          /* 
          Value will only be editable with the onChange event defined, otherwise value will become essentially read-only
          if I were to use the defaultValue property, the value can be changed even without an onChange event defined but it would 
          not update the step state
          */
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((cc) => cc - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((cc) => cc + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
