import React, { Component } from 'react'

export class ClassComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
clickHandler = () => {
    this.setState({
        count : this.state.count +1
    })
}

    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassComponent
