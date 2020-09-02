import React, { Component } from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((state) => ({isToggleOn: !state.isToggleOn}))
  }

  handleClickOther = () => {
    console.log('this is', this)
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.handleClickOther}>
          Other way to write handle click
        </button>
      </div>
    );
  }
}