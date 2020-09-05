import React from 'react'

export default class ChangeFont extends React.Component {
  constructor(props) {
    super(props)
    this.state = {fontSize: this.props.fontSize}
  }

  onChangeFontSize = (value) => {
    this.props.onReceiveFontSize(value)
  }

  render() {
    return(
      <div>
        <div className='yellow-area'>
            Font Size
        </div>
        <div className='row colors'>
          <button className='btn btn-primary' onClick={() => this.onChangeFontSize(1)}>Tăng</button>
          <button className='btn btn-primary ml-10' onClick={ () => this.onChangeFontSize(-1) }>Giảm</button>
        </div>
      </div>
    )
  }
}