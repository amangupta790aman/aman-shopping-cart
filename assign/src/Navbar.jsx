import React, {Component} from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl,Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class CustomNavbar extends Component{
    constructor(props,context){
        super(props, context);
        this.handleShow= this.handleShow.bind(this);
        this.handleClose= this.handleClose.bind(this);

        this.state={show: false};
    }
    handleShow(){
        this.setState({show:false});
    }

    handleClose(){
        this.setState({show:false});
    }

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Shopping Mall </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Navbar.Form pullLeft>
                                    <FormGroup>
                                        <FormControl type= "text" placeholder="Search"/> 
                                        </FormGroup>
                                        {'  '}
                                        <button class="btn btn-warning" onClick={this.handleShow} >Search </button>
                                        
                                    <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>
           </Modal.Body>
        </Modal>

                                        </Navbar.Form>
                                        <Nav pullRight>
                                        <NavItem eventKey={1} componentClass={Link} href="/" to="/"> Home </NavItem>
                                        <NavItem eventKey={2} componentClass={Link} href="/" to="/"> Contact</NavItem>
                                        <NavItem eventKey={3} componentClass={Link} href="/" to="/"> FaQ & Contact </NavItem>
                                        </Nav>
                                        </Navbar.Collapse>
                                        </Navbar>

        )
    }
}