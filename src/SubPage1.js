import React, { Component } from 'react';
import './App.css';

class SubPage1 extends Component {
  render() {
    return (
      <div>

    		<h3> this is subpage1 param passed is {this.props.params.id} </h3>

    	</div>
    );
  }
}

export default SubPage1;
