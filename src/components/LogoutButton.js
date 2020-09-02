import React, { Component } from 'react'

export default class LogoutButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.onClick}>
        Logout
      </button>
    )
  }
}