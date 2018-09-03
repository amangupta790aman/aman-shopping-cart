import React, { Component } from 'react';

import './welcome.css';
import { Image, Grid, Row, Col } from '../node_modules/react-bootstrap';
import a from './2.jpg';

class Welcome extends Component {

  constructor(props)
{
  super(props);
  this.user=""
  this.pass=""
  this.getuser=""
  this.getpass=""
 
 
}

signin()
{
  this.user=prompt("Enter username")
  this.pass=prompt("Enter pasword")
  this.getuser=localStorage.getItem("username")
  this.getpass=localStorage.getItem("password")
  if(this.pass==this.getpass && this.pass==this.getpass)
  {
    this.props.history.push('/choose')
  }else{
    alert("please enter correct details")
  }

 
  
}

  signup()
  {
this.props.history.push('/signup')

  }

  
  render() {
    return (
       <div>      
          <div class="app1">
        
        <p class="demo">Dare to <br/><span class="p1"> Go Outside</span></p>
               </div>
               <br/><br/>

              <Grid>
                  <Row className="show-grid">
    
    <Col md={6} mdPush={6}>
<p className="p2"> “It may be unfair, <br/> but what happens in a few days, <br/> sometimes even a single day, <br/> can change the course of a whole lifetime...” </p>
<br/><br/><br/>
    <button onClick={this.signin.bind(this)} class ="btn btn-primary btn-lg">Sign In</button>
    {'    '}
    <button onClick={this.signup.bind(this)} class ="btn btn-success btn-lg">Sign Up</button>
    </Col>

    <Col md={6} mdPull={6}>
    <img src={a} width="400px" height="525px"/> 
    </Col>

  </Row>
       </Grid>
        </div>
    );
  }
}

export default Welcome;

