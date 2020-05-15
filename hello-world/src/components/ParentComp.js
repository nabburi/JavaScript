import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Nava'
        }
    }
    
componentDidMount(){
    setInterval(() =>{
        this.setState({
            name:'Nava'
        })
    }, 2000)
}

    render() {
        console.log("parent component")
        return (
            <div>
                Parent Component
                <MemoComp name = {this.state.name}/>
               {/*} <RegularComp name = {this.state.name}></RegularComp>
                <PureComp name = {this.state.name}></PureComp>
        */}
            </div>
        )
    }
}

export default ParentComp
