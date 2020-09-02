import React, { Component } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Greeting from './Greeting'

export default class Longincontrol extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    let button;
    if(this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    }
    else {
      button = <LoginButton onClick={this.handleLogoutClick}/>
    }
    return(
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        {button}
      </div>
    )
  }
}