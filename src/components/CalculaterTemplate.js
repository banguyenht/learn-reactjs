import React, {Component } from 'react'
import TemperatureInput from './TemperatureInput'

export default class CalculaterTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { temperature: '' }
  }

  render() {
    const tem = this.state.temperature
    return(
      <div className='container'>
        <button className='btn btn-primary'>ahihi</button>
        <TemperatureInput scale={'c'}/>
        <TemperatureInput scale={'f'}/>
      </div>
    )
  }

  handleChange(event) {
    this.setState({temperature: event.target.value})
  }
}

function BoilingVerdict(props) {
  if(props.celsius >=100) {
    return <p>warter boilling</p>
  }   
  else {
    return <p>water not boiling</p>
  }
}