import { useState } from 'react';

export default function Props() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton countss={count} onClickss={handleClick} />
      <MyButton countss={count} onClickss={handleClick} />
    </div>
  );
}

function MyButton({ countss, onClickss }) {
  return (
    <button onClick={onClickss}>
      Clicked {countss} times
    </button>
  );
}
