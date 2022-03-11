import React, {Component} from 'react';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BREED } from '../shared/breed';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: BREED,
      //selectedBreed: null
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
          {/* Why is it that on the next line, the word "element" is so special and has to specifically be used. Answer: Because that's what it says in the docs!*/}
          <Route path='/home' element={<Home/>} />
          <Route exact path='/directory' element={<Directory breed={this.state.breed}/>} />
          <Route path='/' element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default Main;
