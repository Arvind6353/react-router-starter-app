import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'	
class Page1 extends Component {
  constructor(props){

    super(props);
    this.go=this.go.bind(this);

  }
  render() {
    return (
      <div>
         <center>
      		<h3> this is page1 </h3>

      		

      			<li><Link to="/page1/subpage1/2"> Subpage</Link></li>

      		  <button onClick={this.go}>Go to page2 </button>


      		{this.props.children}

          </center>
    	</div>

    );
  }

contextTypes: {
    router: React.PropTypes.object
  }

  go(){

 this.props.router.push("/page2")



  }
}

export default Page1;
