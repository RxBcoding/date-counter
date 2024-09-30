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
  const currDate = new Date();

  function handleDateString() {
    if (count < 0) {
      currDate.setDate(currDate.getDate() - count);
      return `${Math.abs(count)} days ago was ${currDate.toDateString()}`;
    } else if (count > 0) {
      currDate.setDate(currDate.getDate() + count);
      return `${count} days from today is ${currDate.toDateString()}`;
    } else {
      return `Today is ${currDate.toDateString()}`;
    }
  }

  return (
    <div className="counter">
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <p>{handleDateString()}</p>
    </div>
  );
}

function Step({ step, setStep }) {
  function handleStepIncrease() {
    setStep((currStep) => currStep + 1);
  }

  function handleStepDecrease() {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
  }

  return (
    <div>
      <button onClick={handleStepDecrease}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleStepIncrease}>+</button>
    </div>
  );
}

function Count({ count, setCount, step }) {
  function handleCountIncrease() {
    setCount((currCount) => currCount + step);
  }

  function handleCountDecrease() {
    setCount((currCount) => currCount - step);
  }

  return (
    <div>
      <button onClick={handleCountDecrease}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleCountIncrease}>+</button>
    </div>
  );
}
