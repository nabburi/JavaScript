import React, {useState, useEffect} from 'react'

function HookCounterFive() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(() => {
        console.log('use effect updating title')
        document.title = `You clicked ${count} times`
    },[count])
    
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick = {() => setCount(count+1)}> Click {count} times</button>
        </div>
    )
}

export default HookCounterFive
