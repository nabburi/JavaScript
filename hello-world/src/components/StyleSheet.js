import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    //conditionally setting the classname attribute
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className = {`${className} font-xl`}> StyleSheets</h1>
        </div>
    )
}

export default StyleSheet
