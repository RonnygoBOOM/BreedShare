import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { BREED } from '../shared/breed';
import BreedInfo from './BreedInfoComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: BREED,
      selectedBreed: null
    };
  }

  onBreedSelect(breedId) {
    this.setState({selectedBreed: breedId});
}

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">BreedShare</NavbarBrand> 
          </div>
        </Navbar>
        <Directory breed={this.state.breed} onClick={breedId => this.onBreedSelect(breedId)}/>
        <BreedInfo breed={this.state.breed.filter(breed => breed.id === this.state.selectedBreed)[0]} />
      </div>
    );
  }
}
export default Main;
