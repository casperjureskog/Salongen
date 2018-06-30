import React, { Component } from 'react';
import './List.css';
import SalongList from './salongList';
import { Link } from 'react-router-dom'

class List extends Component {
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
          <i className="material-icons gold">arrow_back_ios</i>
          Hår
          <i className="material-icons rotate gold">tune</i>
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
      <div className="gold"><hr></hr></div>
    )
  }
  
  grade(stars) {
    var i = 0;
    var starIcon = [];
    while (i < 5) {
      if (stars > i) {
        starIcon.push(<i key={i} className="material-icons gold starSize">star</i>);
      } else {
        starIcon.push(<i key={i} className="material-icons gold starSize">star_border</i>);
      }
      i++;
    }
    starIcon.push(<span key={6} className="ratingText">{stars}/5</span>)    
    return  starIcon;
  }
  
  filterMenu() {
    return (
      <div className="filterMenu" onClick={() => this.setState({ filterMenuOn: !this.state.filterMenuOn })}>
        {this.menuText()}
        <i className="material-icons gold">{!this.state.filterMenuOn  ? 'expand_more' : 'expand_less'}</i>
      </div>
    )
  }
  
  filterList(low, high) {
    return (
      <div>
        <div className="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 0, interMax: undefined, filterMenuState: 'Pris filter', filterMenuOn: false })}> Inget filter </div>
        <div className="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 0, interMax: 250, filterMenuState: undefined, filterMenuOn: false })}> Pris 0 - 250 kr </div>
        <div className="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 250, interMax: 500, filterMenuState: undefined, filterMenuOn: false })}> Pris 250 - 500 kr </div>
        <div className="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 500, interMax: 1000, filterMenuState: undefined, filterMenuOn: false })}> Pris 500 - 1000 kr </div>
        <div className="filterMenu menuPadding gold" onClick={() => this.setState({ interMin: 1000, interMax: undefined, filterMenuState: undefined, filterMenuOn: false })}> Pris 1000 - > kr </div>
      </div>
    )
  }
  
  list() {
    var lista = []
    SalongList.map((salong) => {
      if (salong.price > this.state.interMin && (salong.price < this.state.interMax || !this.state.interMax)) {
        lista.push( 
          <Link to={"/salong/"+salong.id} key={salong.id}>
          <div> 
            <div className="listMenu">
              <div className="listHeight infoFont">{salong.time}</div>  
              <div className="listBody">
                <span className="fontMiller">{salong.title}</span>
                {this.low}
                <br></br>
                <div className="starSize paddingMiddle">
                  {this.grade(salong.grade)}
                </div>
                <span className="starSize paddingMiddle adressSize">{salong.adress}</span>
              </div> 
              <div className="listHeight listRight infoFont">
                {salong.price} kr
                <div className="arrowSize">
                  {salong.duration} min
                  <i className="material-icons gold arrow">navigate_next</i>
                </div>
              </div>
            </div>
            <div className="hrLight"></div>
          </div>
          </Link>
        );
        return 
      }
    });
    return lista;
  }

  render() {
    return (
      <div className="App">
        {this.header()}
        <div className="gold"><hr></hr></div>
        {this.filterMenu()}
        {this.state.filterMenuOn && this.filterList()}
        <div className="gold"><hr></hr></div>
        {this.list()}
      </div>
    );
  }
}

export default List;
