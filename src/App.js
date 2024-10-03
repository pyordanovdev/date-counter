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
        Step: {step}
        <input
          type='range'
          id='myRange'
          min='1'
          max='10'
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
      </div>

      <div className='container'>
        <button onClick={decreaseCount}>-</button>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
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

        {count > 0 || step > 1 ? (
          <button
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </p>
    </>
  );
}

export default App;
