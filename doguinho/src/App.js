import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div>Menu</div>
        <div>Select</div>
        <div>Breed Image</div>
      </div>
    )
  }
}

export default App;