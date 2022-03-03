import React, {Component} from 'react';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
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
        <Header />
        <Directory breed={this.state.breed} onClick={breedId => this.onBreedSelect(breedId)}/>
        <BreedInfo breed={this.state.breed.filter(breed => breed.id === this.state.selectedBreed)[0]} />
        <Footer />
      </div>
    );
  }
}
export default Main;
