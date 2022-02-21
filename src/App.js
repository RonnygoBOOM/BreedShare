import React, {component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">BreedShare</NavbarBrand> 
        </div>
      </Navbar>
      <Directory/>
    </div>
  );
}

export default App;
