import { useState } from 'react'
import { useCallback,useEffect,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("")
  //useRef  is used to keep the value even if it changes. It’s like a "memory" for
  const passwordRef = useRef(null);

  const passwodGenretor = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (char) str += "`~!@#$%^&*()-_=+[{]}\|;:'\",.<>/?\\";

    for (let i = 0; i < length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char);
    }
    setPassword(pass);
  }, [length, Number, char, setPassword]);
 
  useEffect(() => {
    passwodGenretor();
  }, [passwodGenretor,length,Number,char])


    const copyPasswordClipbord=useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,9999); /*For mobile devices*/
      window.navigator.clipboard.writeText(password)
    },[password])
  return (
    <>
      <div className="w-full bg-slate-900 h-screen flex justify-center items-center">

        <div className="w-[500px] h-36 p-5  flex-col rounded-lg bg-red-500 flex justify-center items-center">
          <div className="w-[88%] h-12  ">
            {/* input area for password  */}
            <input type="text" className="w-[78%] h-[100%] border-2 border-black outline-none pl-3 font-semibold text-lg" 
            value={password}
             readOnly
              placeholder='password' 
              ref={passwordRef}
              />

            <button id='copy' className="w-[19%] h-[95%] bg-blue-500 ml-2 font-extrabold text-white rounded-xl hover:scale-105 "
                onClick={copyPasswordClipbord}
            >COPY</button>
          </div>
          {/* set range of password */}
          <div className="w-[95%] h-16  mt-5 flex justify-around items-center font-bold">
            <input type="range" className="w-[30%] cursor-pointer "
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            <span>Length({length})</span>
            <input type="checkbox" name="Number" id="Num"
            defaultChecked={Number}
            onChange={()=>{
              setNumber((prev)=>!prev)
            }}
            /><span>Number</span>
            <input type="checkbox" name="char" id="char" 
             defaultChecked={char}
             onChange={()=>{
               setChar((prev)=>!prev)
             }}
            /><span>Chartecter</span>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
