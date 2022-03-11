import React, {Component} from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      /*Browser Router has to encompass all of the main div in app.js */
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
