import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setlen] = useState(8);
  const [numberAllowed, setNumAllow] = useState(false);
  const [charAllowed, setCharAllow] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordRef = useRef(null);

  // Password generator logic
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Copy to clipboard with select
  const copyPassToClipboard = useCallback(() => {
    passwordRef.current.select();  // Select the text
    document.execCommand('copy');  // Copy the selected text
  }, []);

  // Re-generate password whenever any of the conditions change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-screen h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-500 space-y-4">
        <h4 className="text-white text-center text-xl sm:text-2xl">Password Generator</h4>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-2 px-3 text-lg sm:text-xl"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-2 shrink-0 text-lg sm:text-xl">
            Copy
          </button>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-4 text-sm sm:text-base items-center">
          <div className="flex items-center gap-x-2 w-full sm:w-auto">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setlen(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2 w-full sm:w-auto">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumAllow((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-2 w-full sm:w-auto">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
