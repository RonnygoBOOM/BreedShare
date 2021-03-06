import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <React.Fragment>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand> 
                        <img src="/assets/images/Windsprite.png" height="37" width="30" alt="Windsprite.png"/><NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className= "nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className= "nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className= "nav-link" to="/about"> 
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className= "nav-link" to="/contactus"> 
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;