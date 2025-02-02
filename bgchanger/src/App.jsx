import React, { useState } from 'react';

function App() {
  const [color, setBgColor] = useState('olive');

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl' >

            <button 
            onClick={() => setBgColor('red')}
            className='outline-none px-4 rounded-xl'
              style={{ backgroundColor: 'red', color: 'white' }}
            >RED</button>

            <button 
            onClick={() => setBgColor('blue')}
            className='outline-none px-4 rounded-xl'
              style={{ backgroundColor: 'blue', color: 'white' }}
            >BLUE</button>

            <button 
            onClick={() => setBgColor('green')}
            className='outline-none px-4 rounded-xl'
              style={{ backgroundColor: 'green', color: 'white' }}
            >GREEN</button>

            <button 
            onClick={() => setBgColor('yellow')}
            className='outline-none px-4 rounded-xl'
              style={{ backgroundColor: 'yellow', color: 'white' }}
            >YELLOW</button>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
