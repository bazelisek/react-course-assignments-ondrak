"use client";

import { useState } from "react";

export default function ClientDemo({ children }) {
  const [state, setState] = useState(0);
  console.log('ClientDemo rendered');
  return (
    <div className='client-cmp'>
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>
      <p>
        <button onClick={() => {setState(prevState => prevState + 1)}}>Increment</button>
      </p>
      <p>
        {state}
      </p>
      {children}
    </div>
  );
}