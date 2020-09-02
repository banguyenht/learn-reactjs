import React, { Component } from 'react'

export default class ColorResult extends React.Component {
  constructor(props) {
    super(props)
  }
  
  showColor() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize
    }
  }
  render() {
    return(
      <div className='result'>
        <p>color: {this.props.color}  <span>font: {this.props.fontSize}</span></p>
        <div>
          <p style = {this.showColor()}>ahihi do ngoc</p>
        </div>
      </div>
    )
  }
}
