import React, { Component } from 'react'
import '../App.css';
import {Button} from 'react-bootstrap';
export class Details extends Component {
  render() {
    return (
      <div>
        <Button>close</Button>
        <div>
        My details
        <h3>Sobhit Kuamr</h3>
        <p>Age: 25</p>
        <p>Web Developer</p>
        </div>
      </div>
    )
  }
}

export default Details
