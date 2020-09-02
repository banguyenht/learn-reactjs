import React, { Component } from 'react'
import '../styles/ColorPicker.css'
import ColorResult from './ColorResult'
import ColorPicker from './ColorPicker'
import ChangeFont from './ChangeFont'
import Reset from './Reset'

export default class ColorPickerApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red',
      fontSize: 12
    }
  }

  onSettingColor = (color) => {
    this.setState({ color: color })
  }

  onChangeFontSize = (fontSize, method) => {
    if(method === '+') {
      this.setState({fontSize: fontSize + 1})  
    }
    else {
      this.setState({fontSize: fontSize - 1})
    }
  }

  onReset = () => {
    const defaultColor = 'red'
    const defaultFontSize = 12
    this.setState({
      color: defaultColor,
      fontSize: defaultFontSize
    })
  }

  render() {
    return(
      <div className='container color-picker'>
        <div className='row'>
          <div className='col-md-6'>
            <ColorPicker color={this.state.color} onReceiveColor = {this.onSettingColor}/>
            <ColorResult color={this.state.color} fontSize={this.state.fontSize}/>
          </div>
          <div className='col-md-6'>
            <ChangeFont fontSize={this.state.fontSize} onReceiveFontSize={this.onChangeFontSize}/>
          </div>
        </div>
        <div>
          <Reset onReset = {this.onReset}/>
        </div>
      </div>
    )
  }
}

