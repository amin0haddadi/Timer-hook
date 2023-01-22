import { useEffect, useState } from "react"

export function useTimer() {
  const[seconds,setSeconds]=useState(0)
  const[stopAmount,setStopAmount]=useState(false)
  const reset=()=>{
    setSeconds(0);
  }
  const stop=()=>{
    setStopAmount(old=>!old)
  }
  const resume=()=>{
    setStopAmount(old=>!old)
  }

  useEffect(()=>{
    const interval=setInterval(() => {
      if (stopAmount){
        return 
      }
      setSeconds((oldSeconds) => oldSeconds + 1);
    }, 1000);
    return ()=>clearInterval(interval)
    
},[seconds,stopAmount])

  return {seconds,reset,stop,resume}
}
