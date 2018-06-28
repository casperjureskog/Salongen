import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './App.css';
import SalongList from './salongList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMenuOn: false,
      filterMenuState: 'emty'
    };
  }

  header(){
    return (
      <header className="App-header">
          <i class="material-icons gold">arrow_back_ios</i>
          <h2>Hår</h2>
          <i class="material-icons rotate gold">tune</i>
      </header>
    );
  }
  
  line() {
    return (
      <div class="gold"><hr></hr></div>
    )
  }
  
  filterMenu() {
      if(this.state.filterMenuState === 'emty') {
        return (
          <button class="filterMenu" onClick={() => this.setState({ filterMenuOn: true, filterMenuState: 'menuDown' })}>
            <h5>Pris filter</h5>
            <i class="material-icons gold">expand_more</i>
          </button>
        )
      } else {
        this.filterMenuState
      }
  }
  
  filterList() {
    return (
      <ul>
        <li>'Inget filter'</li>
        <li>'Pris 0 - 250 kr'</li>
        <li>'Pris 250 - 500 kr'</li>
        <li>'Pris 500 - 1000 kr'</li>
        <li>'Pris 1000 - Upp kr'</li>
      </ul>
    )
  }
    
  render() {
    return (
      <div className="App">
        {this.header()}
        {this.line()}
        {this.state.filterMenuOn && this.filterList()}
        {this.state.filterMenuState === 'emty' && this.filterMenu()}
        {this.line()}
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
