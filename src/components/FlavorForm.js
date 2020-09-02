
import React, { Component } from 'react'

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'Viet Nam'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('you come from: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Country
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='england'>England</option>
            <option value='china'>China</option>
            <option value='vietname'>Viet Nam</option>
          </select>
        </label>
        <input type='Submit' value='Submit'></input>
      </form>
    )
  }
}
