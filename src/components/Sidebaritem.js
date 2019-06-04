import React, { Component } from 'react';


export class Sidebaritem extends Component {
  render() {
    return this.props.list.map(item => (
      <p>{item}</p>
    ))
  }
}

export default Sidebaritem;
