import React, { Component } from 'react';
import Main from './components/MainComponents';
import { BrowseRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  }
}

export default App;
