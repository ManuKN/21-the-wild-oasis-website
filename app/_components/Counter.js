"use client"
import { useState } from 'react';

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>There r {users.length} users</h1>
      <button onClick={() => setCount((c) => c + 1)}>Click me {count}</button>
    </div>
  );
}
