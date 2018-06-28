import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './App.css';
import SalongList from './salongList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMenuOn: false,
      filterMenuState: 'Pris filter'
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
    return (
      <button class="filterMenu" onClick={() => this.setState({ filterMenuOn: !this.state.filterMenuOn })}>
        <h4>{this.state.filterMenuState}</h4>
        <i class="material-icons gold">{!this.state.filterMenuOn  ? 'expand_more' : 'expand_less'}</i>
      </button>
    )
  }
  
  filterList() {
    return (
      <div>
        <button class="filterMenu" onClick={() => this.setState({ filterMenuState: 'Pris filter' })}> Inget filter </button>
        <button class="filterMenu" onClick={() => this.setState({ filterMenuState: 'Pris 0 - 250 kr' })}> Pris 0 - 250 kr </button>
        <button class="filterMenu" onClick={() => this.setState({ filterMenuState: 'Pris 250 - 500 kr' })}> Pris 250 - 500 kr </button>
        <button class="filterMenu" onClick={() => this.setState({ filterMenuState: 'Pris 500 - 1000 kr' })}> Pris 500 - 1000 kr </button>
        <button class="filterMenu" onClick={() => this.setState({ filterMenuState: 'Pris 1000 - Upp kr' })}> Pris 1000 - Upp kr </button>
      </div>
    )
  }
    
  render() {
    return (
      <div className="App">
        {this.header()}
        {this.line()}
        {this.filterMenu()}
        {this.state.filterMenuOn && this.filterList()}
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
