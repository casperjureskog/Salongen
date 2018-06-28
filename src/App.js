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
          <h2>Hår</h2>
          <i class="material-icons rotate gold">tune</i>
      </header>
    );
  }
  
  menuText() {
    if (this.state.filterMenuState === 'Pris filter') {
      return <h4>{this.state.filterMenuState}</h4>;
    } else {
      return (
        <h4>
        Pris {this.state.interMin} - {this.state.interMax ? this.state.interMax : '>'} kr
        </h4>
      );
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
        <div class="filterMenu" onClick={() => this.setState({ interMin: 0, interMax: undefined, filterMenuState: 'Pris filter' })}> Inget filter </div>
        <div class="filterMenu" onClick={() => this.setState({ interMin: 0, interMax: 250, filterMenuState: undefined })}> Pris 0 - 250 kr </div>
        <div class="filterMenu" onClick={() => this.setState({ interMin: 250, interMax: 500, filterMenuState: undefined })}> Pris 250 - 500 kr </div>
        <div class="filterMenu" onClick={() => this.setState({ interMin: 500, interMax: 1000, filterMenuState: undefined })}> Pris 500 - 1000 kr </div>
        <div class="filterMenu" onClick={() => this.setState({ interMin: 1000, interMax: undefined, filterMenuState: undefined })}> Pris 1000 - > kr </div>
      </div>
    )
  }
  
  list() {
    var lista = []
      
      SalongList.map((salong) => {
        if (salong.price > this.state.interMin && (salong.price < this.state.interMax || !this.state.interMax)) {
        lista.push( <div key={salong.id} class="listMenu">
         <div class="listHeight">{salong.time}</div>  
         <div class="listBody">
           {salong.title}
           {this.low}
           <br></br>
           <div class="starSize paddingMiddle">
             {this.grade(salong.grade)}
             {salong.grade}/5
           </div>
           <span class="starSize paddingMiddle">{salong.adress}</span>
         </div> 
         <div class="listHeight listRight">
          {salong.price} kr
           <div class="arrowSize">
            {salong.duration} min
            <i class="material-icons gold arrow">navigate_next</i>
          </div>
         </div>
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
