import React, {Component} from 'react'

export default class NumberList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const numbers = this.props.numbers
    const listItems = numbers.map((number) =>
      <ListItem key={number} value={number}/>
    )
    return(
      <ul>
        {listItems}
      </ul>
    )
  }
}

function ListItem(props) {
  return <li>this is: {props.value}</li>;
}