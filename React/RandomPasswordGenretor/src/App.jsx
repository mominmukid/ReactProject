import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(6);
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setpassword] = useState("");

  const passwordGenretor = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*()';
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setpassword(pass);
  }, [length, numAllow, charAllow, setpassword])

  
  const copyPassonClip=()=>{
    passwordRef.current?.select();
    // passwordRef.current?setSelectionRange(1,4)
        window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passwordGenretor();
  },[length, numAllow, charAllow,passwordGenretor])
       const passwordRef=useRef(null);

  return (
    <>
      <div className='w-full h-screen bg-black flex justify-center items-center flex-wrap'>

        <div className='w-[50%] min-h-20 bg-slate-700 rounded-e-md flex flex-col p-2 items-center'>
          <div className='flex justify-between items-center w-[90%] '> <input type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className='rounded-s-md outline-none pl-5 w-[80%] h-[100% min-h-10' /> 
            <button className='w-[20%] bg-blue-700 p-2 rounded-e-md text-white font-semibold' onClick={copyPassonClip}>copy</button> 
            </div>
          <div className='w-[100%] bg-white min-h-16 mt-4 flex justify-evenly items-center'>
            <div className='text-center'>
              <input type="range"
                min={0}
                max={50}
                value={length}
                onChange={e => setlength(e.target.value)}
                className='cursor-pointer w-[10]' />
              <p>length({length})</p>
            </div>
            <div>
              <input type="checkbox" id="numberAllow"
                defaultChecked={numAllow}
                onChange={() => {
                  setnumAllow(!numAllow)
                }}
              />
              <label >number</label>
            </div>
            <div>
              <input type="checkbox" id="numberAllow"
                defaultChecked={charAllow}
                onChange={() => {
                  setcharAllow(!charAllow)
                }}
              />
              <label >Charecter</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App