
import React, { useState } from 'react'
import {InputBox} from './components'
import usecurrInfo from './hooks/currencyInfo'



function App() {
  const [amount,setamount]=useState(0);
  const [From,setFrom]=useState('usd');
  const [To,setTo]=useState('inr');
  const [result,setResult]=useState(0);

  const currInfo=usecurrInfo(From);

  const options=Object.keys(currInfo);
  const swap=()=>{
    setFrom(To);
    setTo(From);
    setResult(amount);
    setamount(result);
  }

  const convert=()=>{
    setResult(amount * currInfo[To]);
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currOptions={options}
                            oncurrChange={(curr)=>setFrom(curr)}
                            selectcurrValue={From}
                            onamountChange={(amount)=>setamount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={result}
                            currOptions={options}
                            oncurrChange={(curr)=>setTo(curr)}
                            selectcurrValue={To}
                            onamountChange={(amount)=>setamount(result)}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App