import React, { Component } from 'react';
import './App.css';
import NavComp from './Nav';
class App extends Component {
  render() {
    return (

        <div>

          <NavComp/>


          {this.props.children}


        </div>



    );
  }
}

export default App;
