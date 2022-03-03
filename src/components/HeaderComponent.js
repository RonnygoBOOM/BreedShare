import React, { Component }  from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">BreedShare</NavbarBrand> 
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;