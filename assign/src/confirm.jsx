import React, { Component } from 'react';
import './confirm.css';

class Confirm extends Component {

  constructor(props)
{
  super(props);
  
  this.ite=localStorage.getItem("Item")
  this.qty=localStorage.getItem("Quantity")
  
}


back()
{
  this.props.history.push('/choose')

}
  
  render() {
    return (
       <div> 
              
   <div class="confirm1"> 
        
         Item: {this.ite}<br/>
         Quantity: {this.qty}<br/>

        
     </div><br/><br/><br/>

        
     
     <div class="cont"><button id="cont1" onClick={this.back.bind(this)} class="btn btn-lg btn-success">Continue </button>
</div>
       


        </div>
    );
  }
}

export default Confirm;

