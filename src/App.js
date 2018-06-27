import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './App.css';
import SalongList from './salongList';

class App extends Component {
  
  test(){
    return 'nisse';
  }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.test()} 
          <MaterialIcon icon="dashboard" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
         {
           SalongList.map(function(movie){
             return <li>{movie.id} - {movie.title}</li>;
           })
         }
       </ul>
      </div>
    );
  }
}

export default App;
