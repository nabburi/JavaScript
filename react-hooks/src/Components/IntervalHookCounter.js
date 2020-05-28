import React, {useState, useEffect} from 'react'



function IntervalHookCounter() {
    const [count, setCount] = useState(0)

 const tick = () => {
     //also you can use prevcount to increment the count, so that you don't need to mention count in dependency list
     setCount(count + 1)
 }

 useEffect(() => {
     const interval = setInterval(tick, 1000)

     return () => {
         clearInterval(interval)
     }

 }, [count])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
