import React, { Component } from 'react'

export default class ButtonColor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: props.color }
  }
  render() {
    return <button className={'btn btn-color btn-' + this.state.color}></button>
  }
}