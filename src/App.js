import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SignIn from './components/SignIn';
import Tick from './components/Tick'
import Toggle from './components/Toggle'
import LoginControl from './components/LoginControl'
import Map from './components/Map'
import NumberList from './components/NumberList'
import NameForm from './components/NameForm'
import FlavorForm from './components/FlavorForm'
import ReservationForm from './components/ReservationForm'
import CalculaterTemplate from './components/CalculaterTemplate'
import ColorPickerApp from './components/ColorPickerApp'

function App() {
  const user = {
    userUrl: 'https://i.pinimg.com/474x/54/36/ae/5436ae887caf735f2edbbf0fe06e3ed2.jpg',
    userName: 'AAA'
  }
  return (
    <div>
      {/* <Clock/>
      <Toggle />
      <LoginControl isLoggedIn={true}/>
      <NumberList numbers={[1,2,3,4,5]}/>
      <NameForm />
      <FlavorForm /> */}
      {/* <ReservationForm /> */}
      {/* <CalculaterTemplate /> */}
      <ColorPickerApp />
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
}

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render(){
    return(
    <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

function Welcome(props) {
  return <h4>hello { props.name } </h4>
}

class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <div className='Avatar'>
          <img className='avatar' src={this.props.user.userUrl} alt={this.props.user.userName}>
          </img>
        <div className="UserInfo">
          { this.props.user.userName }
        </div>
        </div>
      </div>
    )
  }
}
 export default App