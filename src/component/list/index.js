import React, { Component } from 'react'

export default class List extends Component {
  getData = () => {
    console.log("hi");
  }
  render() {
    return (
      <div>
        {this.tasks}
        <li key={this.props.key} onClick={this.getData}>{this.props.data}</li>
      </div>
    )
  }
}
