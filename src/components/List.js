import React, { Component } from 'react';
import './List.css';
import SalongData from './salongData';
import { header, grade } from './shardComponents'
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
      <div className="filterListPadding">
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
    SalongData.map((salong) => {
      if (salong.price > this.state.interMin && (salong.price < this.state.interMax || !this.state.interMax)) {
        lista.push( 
          <Link to={"/salong/"+salong.id} key={salong.id}>
            <div className="listMenu">
              <div className="listHeight infoFont">{salong.time}</div>  
              <div className="listBody">
                <span className="fontMiller">{salong.title}</span>
                {this.low}
                <br></br>
                <div className="starSize paddingMiddle">
                  {grade(salong.grade, salong.nummberOfGrades)}
                </div>
                <span className=" paddingMiddle adressSize">{salong.adress}</span>
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
          </Link>
        );
      }
    });
    return lista;
  }

  render() {
    return (
      <div>
        {header()}
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
