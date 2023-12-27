import { useState } from 'react';
import styled from 'styled-components';

const Wrraper = styled.div`
  background: red;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Wrraper></Wrraper>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
