import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from '../UserContext'

class CompoenentE extends Component {

    static contextType = UserContext
    
    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF/>
            </div>
        )
    }
}



export default CompoenentE
