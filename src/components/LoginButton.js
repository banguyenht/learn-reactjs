import React, { Component } from 'react'

export default class LoginButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.onClick}>
        Login
      </button>
    )
  }
}