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
      interMax: undefined,
    };
  }

  header(){
    return (
      <header className="App-header">
          <i class="material-icons gold">arrow_back_ios</i>
          Hår
          <i class="material-icons rotate gold">tune</i>
      </header>
    );
  }
  
  menuText() {
    if (this.state.filterMenuState === 'Pris filter') {
      return this.state.filterMenuState;
    } else {
      return <span> Pris {this.state.interMin} - {this.state.interMax ? this.state.interMax : '>'} kr </span>;
    }
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
    starIcon.push(<span class="ratingText">{stars}/5</span>)    
    return  starIcon;
  }
  
  filterMenu() {
    return (
      <div class="filterMenu" onClick={() => this.setState({ filterMenuOn: !this.state.filterMenuOn })}>
        {this.menuText()}
        <i class="material-icons gold">{!this.state.filterMenuOn  ? 'expand_more' : 'expand_less'}</i>
      </div>
    )
  }
  
  filterList(low, high) {
    return (
      <div>
        <div class="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 0, interMax: undefined, filterMenuState: 'Pris filter', filterMenuOn: false })}> Inget filter </div>
        <div class="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 0, interMax: 250, filterMenuState: undefined, filterMenuOn: false })}> Pris 0 - 250 kr </div>
        <div class="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 250, interMax: 500, filterMenuState: undefined, filterMenuOn: false })}> Pris 250 - 500 kr </div>
        <div class="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 500, interMax: 1000, filterMenuState: undefined, filterMenuOn: false })}> Pris 500 - 1000 kr </div>
        <div class="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 1000, interMax: undefined, filterMenuState: undefined, filterMenuOn: false })}> Pris 1000 - > kr </div>
      </div>
    )
  }
  
  list() {
    var lista = []
    SalongList.map((salong) => {
      if (salong.price > this.state.interMin && (salong.price < this.state.interMax || !this.state.interMax)) {
        lista.push( 
          <div key={salong.id}> 
            <div class="listMenu">
              <div class="listHeight infoFont">{salong.time}</div>  
              <div class="listBody">
                <span class="fontMiller">{salong.title}</span>
                {this.low}
                <br></br>
                <div class="starSize paddingMiddle">
                  {this.grade(salong.grade)}
                </div>
                <span class="starSize paddingMiddle adressSize">{salong.adress}</span>
              </div> 
              <div class="listHeight listRight infoFont">
                {salong.price} kr
                <div class="arrowSize">
                  {salong.duration} min
                  <i class="material-icons gold arrow">navigate_next</i>
                </div>
              </div>
            </div>
            <div class="hrLight"></div>
          </div>
        );
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
