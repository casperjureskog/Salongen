import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './App.css';
import SalongList from './salongList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterMenuOn: false,
      filterMenuState: 'Pris filter',
      interMin: 0,
      interMax: 1500,
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
  
  grade(stars) {
        var i = 0;
        var starIcon = [];
        while (i < 5) {
          if (stars > i) {
            starIcon.push(<i key={i} class="material-icons gold starSize">star</i>);
          } else {
            starIcon.push(<i key={i} class="material-icons gold starSize">star_border</i>);
          }
          i++;
        }
      return  starIcon;
  }
  
  filterMenu() {
    return (
      <button class="filterMenu" onClick={() => this.setState({ filterMenuOn: !this.state.filterMenuOn })}>
        <h4>{this.state.filterMenuState}</h4>
        <i class="material-icons gold">{!this.state.filterMenuOn  ? 'expand_more' : 'expand_less'}</i>
      </button>
    )
  }
  
  filterList(low, high) {
    return (
      <div>
        <button class="filterMenu" onClick={() => this.setState({ interMin: 0, interMax: ' ' })}> Inget filter </button>
        <button class="filterMenu" onClick={() => this.setState({ interMin: 1, interMax: 250 })}> Pris 0 - 250 kr </button>
        <button class="filterMenu" onClick={() => this.setState({ interMin: 250, interMax: 500 })}> Pris 250 - 500 kr </button>
        <button class="filterMenu" onClick={() => this.setState({ interMin: 500, interMax: 1000 })}> Pris 500 - 1000 kr </button>
        <button class="filterMenu" onClick={() => this.setState({ interMin: 1000, interMax: ' ' })}> Pris 1000 - > kr </button>
      </div>
    )
  }
  
  list() {
    var lista = []
      SalongList.map((salong) => {
        if (salong.price > this.state.interMin && (salong.price < this.state.interMax || this.state.interMax === ' ')) {
        lista.push( <div key={salong.id} class="filterMenu">
         <div class="listHeight">{salong.time}</div>  
         <div class="listBody">
           {salong.title}
           {this.low}
           <br></br>
           <div class="starSize">
             {this.grade(salong.grade)}
             {salong.grade}/5
           </div>
           {salong.adress}
         </div> 
         <div class="listHeight">{salong.price} kr</div>
        </div>);
        }
      });
    
    return lista;
  }
    
  render() {
    return (
      <div className="App">
        {this.header()}
        <div class="gold"><hr></hr></div>
        {this.filterMenu()}
        {this.state.filterMenuOn && this.filterList()}
        <div class="gold"><hr></hr></div>
        {this.list()}
      </div>
    );
  }
}

export default App;
