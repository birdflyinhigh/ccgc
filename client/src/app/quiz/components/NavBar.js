import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {LogoIcon} from "../../../assets/Icons";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";



class NavBar extends React.PureComponent {


    render() {


        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    {/*<div className={'logo'}/>*/}
                    Canvas Editor
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                        <Nav.Link> <Link to="/quiz">
                            Words
                        </Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}




export default NavBar;
