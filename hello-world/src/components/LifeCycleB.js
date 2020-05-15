import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Nava'
    }
    console.log('LifeCycleB Cosntructor')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('LifeCycleB getDerivedStateFromProps') 
    return null
  }

  componentDidMount(){
    console.log('LifeCycleB componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')
  }
  

  render () {
    console.log('LifeCycleB rendor')
    return <div>LifeCycleB</div>
  }
}

export default LifeCycleB
