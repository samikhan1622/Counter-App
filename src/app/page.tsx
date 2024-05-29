"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [runninig, setRunning] = useState(false);

    useEffect(()=> {

      let timer: any

      if (runninig){
        timer = setInterval(()=>{
          setCount((prevCount) => prevCount +1)
        }, 600)
      };

      return ()=>{
        clearInterval(timer)
      }
    }, [runninig, count]);

    
    const handleStart = ()=>{
      setRunning(true)
    };

    const handlePause = ()=>{
      setRunning(false)
    };

    const handleEnd = ()=>{
      setRunning(false)
      setCount(0)
    }
  
  return (
   <div id="bgpic" className="h-screen flex justify-center items-center">
    <div className=" p-4 bg-blue-500 rounded-lg">
      <h1 className="font-extrabold text-3xl flex justify-center items-center">Counter App</h1>
      <br />
      <p className=" font-bold text-3xl flex justify-center items-center">{count}</p>
      <br />
      <div className="flex justify-center items-center gap-4">
      <button onClick={handleStart} className=" font-bold bg-slate-950 rounded-xl p-2 text-white hover:bg-slate-700">Start</button>
      <button onClick={handlePause} className=" font-bold bg-slate-950 rounded-xl p-2 text-white hover:bg-slate-700">Pause</button>
      <button onClick={handleEnd} className=" font-bold bg-slate-950 rounded-xl p-2 text-white hover:bg-slate-700">End</button>
      </div>
    </div>
   </div>
  );
}
