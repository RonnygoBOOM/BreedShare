import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { BREED } from './shared/breed';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: BREED
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">BreedShare</NavbarBrand> 
          </div>
        </Navbar>
        <Directory breed={this.state.breed}/>
      </div>
    );
  }
}
export default App;
