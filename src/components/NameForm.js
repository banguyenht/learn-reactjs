import React, { Component } from 'react'

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('name is submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <lable>Name
            <input type='text' value={this.state.value} onChange={this.handleChange} />
            </lable>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}