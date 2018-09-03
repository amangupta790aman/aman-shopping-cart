import React, { Component } from 'react';
import './signup.css';
import Choose from './choose';

class Signup extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
             username:"",
             password:"",
             number:""
          }
    }

    store()
    {
      localStorage.setItem("username",this.state.fnme);
      localStorage.setItem("username",this.state.number);
      localStorage.setItem("username",this.state.username);
      localStorage.setItem("password",this.state.password);
    }

  home() {
    this.props.history.push('/')

  }

  
  fname(e){
    this.setState({
      fname:e.target.value
    })
  }

  number(e){
    this.setState({
      number:e.target.value
    })
  }


  name(e)
  {
this.setState({
username:e.target.value


})
  }

  pass(e)
  {
    this.setState({
        password:e.target.value
        
        })

  }

  


  render() {
    return (
      <div class="signup">
    
      <form>
      <div class="frm"><input type="text" class="cmmn" placeholder="Enter your Fullname" required onChange={this.fname.bind(this)}/></div>        
      <br/> <div class="frm"><input type="number" class="cmmn" placeholder="Enter your Mobile Number" required onChange={this.number.bind(this)}/></div>
           <br/> <div class="frm"><input type="text" class="cmmn" placeholder="Enter your Mail Id" required onChange={this.name.bind(this)}/></div>
           <br/> <div class="frm"><input type="password" class="cmmn" placeholder="Enter your password" required onChange={this.pass.bind(this)}/>

          </div><br/>

        <button type="submit" onClick={this.store.bind(this)} class="btn btn-lg btn-info">Submit</button>
         {'  '}
        <button type=" cancel"  onClick={this.home.bind(this)} class="btn btn-lg btn-danger">Cancel</button>
      <br/>
        </form>
        </div>
          );
  }
}

export default Signup;

