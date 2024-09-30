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

  function handleStepDecrease() {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
  }

  return (
    <div className="counter">
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((cs) => cs + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((cc) => cc - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
}
