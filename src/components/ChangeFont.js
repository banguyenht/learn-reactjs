import React from 'react'

export default class ChangeFont extends React.Component {
  constructor(props) {
    super(props)
    this.state = {fontSize: this.props.fontSize}
  }

  onChangeFontSize = (method) => {
    if(method === '+') {
      this.setState({ fontSize: this.state.fontSize + 1})
    }
    else {
      this.setState({ fontSize: this.state.fontSize - 1})
    }
    this.props.onReceiveFontSize(this.state.fontSize, method)
  }

  render() {
    return(
      <div>
        <div className='yellow-area'>
            Font Size
        </div>
        <div className='row colors'>
          <button className='btn btn-primary' onClick={() => this.onChangeFontSize('+')}>Tăng</button>
          <button className='btn btn-primary ml-10' onClick={ () => this.onChangeFontSize('-') }>Giảm</button>
        </div>
      </div>
    )
  }
}