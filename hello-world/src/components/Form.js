import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: '',
      comments: '',
      skill: 'React'
    }
  }

  handleUserName = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    })
  }

  handleSkillChange = event => {
    this.setState({
      skill: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.skill}`)
    event.preventDefault()
  }
  render () {
    const { userName, comments, skill } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName </label>
          <input
            type='text'
            value={userName}
            onChange={this.handleUserName}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Skill </label>
          <select value={skill} onChange={this.handleSkillChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <div>
          <button type='submit'> Submit </button>
        </div>
      </form>
    )
  }
}

export default Form
