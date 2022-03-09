import React, {Component} from 'react';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route } from 'react-router-dom';
import { BREED } from '../shared/breed';
import BreedInfo from './BreedInfoComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: BREED,
//      selectedBreed: null
    };
  }

 /* onBreedSelect(breedId) {
    this.setState({selectedBreed: breedId});
}*/

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route path='/home' component={HomePage} />
          <Route path='/directory' render={() => <Directory breed={this.state.breed}/>} />
          {/*<Redirect to='/home' />*/}
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default Main;
