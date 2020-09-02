import React, { Component } from 'react'

export default class Map extends React.Component {
  render() {
    const arr = [1,2,3,4,5,6,7,8,9]
    const listNumber = arr.map((item) => <li>{item}</li>)
    return(
      <ul>
        {listNumber}
      </ul>
    )
  }
}