import React, { Component } from 'react';
import a from './1.jpg';
import n from './4.jpg';
import o from './2.jpg';
import v from './v.jpeg';
import z from './3.jpg';
import './choose.css';

import {Grid, Row, Button,Col, Thumbnail, Image} from 'react-bootstrap';


class Choose extends Component {
  
  constructor(props) {
    super(props);
   
    this.get = 0
    this.state = {
      selectvalue:"",
      quantity: "",
      counter: 1,
      counter1:1,
      counter2:1,
      item: 0,
   
    }

  }

  
  add1 = (e) => {
    this.setState({
      counter: this.state.counter + 1
    });
    e.preventDefault();
  }
minus1 = (e) => {  this.setState({
      counter: this.state.counter - 1});
    e.preventDefault();
  }


  add2 = (e) => {    this.setState({
      counter1: this.state.counter1 + 1});
    e.preventDefault();
  }
minus2 = (e) => {this.setState({
      counter1: this.state.counter1 - 1});
    e.preventDefault();
  }

  
  add3 = (e) => {  this.setState({
      counter2: this.state.counter2 + 1});
    e.preventDefault();
  }

minus3 = (e) => {this.setState({
      counter2: this.state.counter2 - 1});
    e.preventDefault();
  }
  
  add = (e) => { this.setState({
      item: this.state.item + 1   });
      alert("Added to Cart");
    e.preventDefault();
  }
 

  confirm = (e) => {
    alert(this.state.item + " Item Added to Cart ")
    localStorage.setItem("Item",this.state.selectvalue);
    localStorage.setItem("Quantity",this.state.counter);
    e.preventDefault();
  }

  
  send() {
    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div class="div123">

<Grid>
  <Row>
    <Col xs={6} md={4}>
    <Thumbnail className="th1" src={a} width="350px" height="350px" >
        <h3 class="p12">Every Single SECRET</h3>
        <p >English, Emily  Carpenter</p>
        <p>Rs. 175/-</p>
        <p>
          <Button  onClick={this.add.bind(this)} bsStyle="primary">Add To cart</Button>  {'   '}
          <Button  onClick={this.add1.bind(this)} className="btn2" bsStyle="success">+</Button> {'  '}
                {this.state.counter} {'  '}
                <Button onClick={this.minus1.bind(this)} bsStyle="warning">-</Button>
    
        </p>
    </Thumbnail>  
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail className="th1" src={n} width="350px" height="350px"  >
        <h3 class="p12">A Thousand Splendid Suns</h3>
        <p>English, Afgani  Khaled Hosseini</p>
        <p>Rs. 199/-</p>
        <p>
          <Button  onClick={this.add.bind(this)} bsStyle="primary">Add To Cart</Button>
          <Button  onClick={this.add2.bind(this)} className="btn2" bsStyle="success">+</Button> {'  '}
                {this.state.counter1} {'  '}
                <Button onClick={this.minus2.bind(this)} bsStyle="warning">-</Button>
        
      
        </p>
      </Thumbnail>
    </Col>

    <Col xs={6} md={4} >
      <Thumbnail className="th1" src={o} width="350px" height="350px">
      
        <h3 class="p12"> The Kite Runner</h3>
        <p>English, Khaleed Hosseini </p>
        <p>Rs. 130/-</p>
        <p>
          <Button  onClick={this.add.bind(this)} bsStyle="primary">Add To Cart</Button>
          <Button  onClick={this.add3.bind(this)} className="btn2" bsStyle="success">+</Button> {'  '}
                {this.state.counter2} {'  '}
                <Button onClick={this.minus3.bind(this)} bsStyle="warning">-</Button>
        
         
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>

       
          <div class="form">
            
<div class="but">
          
          {}
          {}

          <div>
            <button onClick={this.confirm.bind(this)} class="btn btn-lg btn-info" > Checkout</button>

          </div>

          </div><br /><br /><br />
          {}

          <div class="final">
            <button onClick={this.send.bind(this)} class="btn btn-lg btn-warning" id="btn123">Next</button>

          </div>

      </div>
        </div >   
    
    );
  }
}

export default Choose;

