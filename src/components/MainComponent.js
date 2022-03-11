import React, {Component} from 'react';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BREED } from '../shared/breed';
import { COMMENTS } from '../shared/comments';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: BREED,
      comments: COMMENTS,
      //selectedBreed: null
    };
  }


 /* onBreedSelect(breedId) {
    this.setState({selectedBreed: breedId});
}*/

  render() {

    return (
      <div>
        <Header />
        <Routes>
          {/* Why is it that on the next line, the word "element" is so special and has to specifically be used. Answer: Because that's what it says in the docs!*/}
          <Route path='/home' element={<Home breed={this.state.breed.filter(breed => breed.featured)[0]}/>} />
          <Route exact path='/directory' element={<Directory breed={this.state.breed}/>} />
          <Route exact path='/contactus' element={<Contact/>} />
          <Route path='/' element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default Main;
