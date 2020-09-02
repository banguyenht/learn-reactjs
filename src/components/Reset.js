import React from 'react'

export default class Reset extends React.Component {
  constructor(props) {
    super(props)
  }

  onReset = () => {
    this.props.onReset()
  }
  
  render() {
    return(
      <div>
        <button className='btn btn-warning' onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}