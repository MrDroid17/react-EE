import React, { Component } from 'react'
import '../App.css';
import { visible } from 'ansi-colors';

export class Lead extends Component {


  render() {
    return   this.props.ld.leadlist.map(lead => (
      <div className="lead">
        <h4>{lead.name}
          <p>age: {lead.age}</p>
        </h4>
      </div>
      ))
  }
}

export default Lead;
