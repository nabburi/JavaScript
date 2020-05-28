import React, {useState } from 'react'
import HookMouse from './HookMouse'

function MosueContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick = {() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MosueContainer
