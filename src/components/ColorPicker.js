import React from 'react'
import ButtonColor from './ButtonColor'

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ['red', 'green', 'yellow']
    }
  }

  showColor(color) {
    return {
      backgroundColor: color
    }
  }

  setActiveColor(color) {
    this.props.onReceiveColor(color)
  }

  render() {
    const elementColors = this.state.colors.map((color, index) => {
    return <span className={this.props.color === color ? 'active' : ''}
                  key={index}
                  style={ this.showColor(color) }
                  onClick={() => this.setActiveColor(color)}
                  >

    </span>
    })
    return(
      <div>
        <div className='blue-area'>
          Color Picker
        </div>
        <div>
          <div className='row colors'>
            { elementColors }
          </div>
        </div>
      </div>
    )
  }
}