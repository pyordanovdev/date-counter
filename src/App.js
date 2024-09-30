import { useState } from "react";

function App() {
  return (
    <div className='date-app'>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // Handler fn - Step
  function increaseStep() {
    setStep((s) => s + 1);
  }
  function decreseStep() {
    setStep((s) => s - 1);
  }

  // Handler fn - Count
  function increaseCount() {
    setCount((c) => c + step);
  }
  function decreaseCount() {
    setCount((c) => c - step);
  }

  function returnDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toDateString();
  }

  return (
    <>
      <div className='container'>
        <button onClick={decreseStep}>-</button>
        Step: {step}
        <button onClick={increaseStep}>+</button>
      </div>

      <div className='container'>
        <button onClick={decreaseCount}>-</button>
        Count: {count}
        <button onClick={increaseCount}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today would be `
            : `${Math.abs(count)} days from today was `}
        </span>
        <span>{returnDate(count)}</span>
      </p>
    </>
  );
}

export default App;
