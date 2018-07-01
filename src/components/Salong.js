import React, { Component } from 'react';
import 'material-icons-react';
import './Salong.css';
import SalongList from './salongList';
import { header, grade } from './shardComponents'


class Salong extends Component {
  
  navTabs() {
    return (
      <div className="tabs">
        <div className="tab">Info
          <div className="gold"><hr className="menuHr"></hr></div>
        </div>
        <div className="tab">Schema
          <div><hr className="menuHr white"></hr></div>
        </div>
      </div>
    );
  }
  
  salongInfo() {
    var salongen = SalongList.map(salong => {
      if (salong.id === Number(this.props.match.params.id))  {
        return (  
          <div key={salong.id}> 
            <div className="salongHeader">
              {header('info')}
              <div className="nameRating">
                <span className="fontMiller headerSize">{salong.title}</span>
                <div className="starSizeDiv ">
                  <br></br>
                  {grade(salong.grade, salong.nummberOfGrades)}
                </div>
              </div>
            </div>
            {this.navTabs()}
            <div className="graySpace"></div>
            <div className="infoList">
              <i className="material-icons iconPadding">room</i>
              <span className="infoText"> {salong.adress} {salong.postNrStad}</span>
            </div>
            <div className="hrLight"></div>
            <div className="infoList">
              <i className="material-icons iconPadding">access_time</i>
              <span className="infoText"> Öppet mellan {salong.hours} idag </span>
              <i className="material-icons gold">expand_more</i>
            </div>
            <div className="hrLight"></div>
            <div className="infoList">
              <i className="material-icons iconPadding">phone</i>
              <span className="infoText"> {salong.phone}</span>
            </div>
            <div className="hrLight"></div>
            <div className="infoList">
              <i className="material-icons iconPadding">language</i>
              <span className="infoText"> {salong.www}</span>
            </div>
            <div className="hrLight"></div>
            <div className="infoList paragraf">
              <span className="infoText"> {salong.description}</span>
            </div>
          </div>
        );
      };
    });
    return salongen;
  }
  
  
  render() {
    return (<div>
      {this.salongInfo()}
      </div>);
  };
}

export default Salong;