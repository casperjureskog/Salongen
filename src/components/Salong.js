import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './Salong.css';
import SalongList from './salongList';
import { Link } from 'react-router-dom'


class Salong extends Component {
  header(){
    return (
      <header className="App-header">
          <Link to={"/"} >
            <i class="material-icons">arrow_back_ios</i>
          </Link>
          <i class="material-icons">favorite_border</i>
      </header>
    );
  }
  
  navTabs() {
    return (
      <div class="tabs">
      <div class="tab">Info
        <div class="gold"><hr class="menuHr"></hr></div>
      </div>
      <div class="tab">Schema
        <div><hr class="menuHr white"></hr></div>
      </div>
      </div>
    );
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
  
  salongInfo() {
    var salongen = SalongList.map(salong => {
      if (salong.id == this.props.match.params.id)  {
        return (  
          <div key={salong.id}> 
            <div class="">
              <div class="salongHeader">
                {this.header()}
                <div class="nameRating">
                  <span class="fontMiller headerSize">{salong.title}</span>
                  
                  <div class="starSizeDiv ">
                  <br></br>
                    {this.grade(salong.grade)}
                  </div>
                </div>
              </div>
              {this.navTabs()}
              <div class="graySpace"></div>
              <div class="infoList">
                <i class="material-icons iconPadding">room</i>
                <span class="infoText"> {salong.adress} {salong.postNrStad}</span>
              </div>
              <div class="hrLight"></div>
              <div class="infoList">
                <i class="material-icons iconPadding">access_time</i>
                <span class="infoText"> Öppet mellan {salong.hours} idag</span>
                
              </div>
              <div class="hrLight"></div>
              <div class="infoList">
              <i class="material-icons iconPadding">phone</i>
                <span class="infoText"> {salong.phone}</span>
              
              </div>
              <div class="hrLight"></div>
              <div class="infoList">
              <i class="material-icons iconPadding">language</i>
                <span class="infoText"> {salong.www}</span>
                
              </div>
              <div class="hrLight"></div>
            </div>
          </div>
        );
      };
    });
    return salongen;
  }
  
  
  render() {
    {this.salongInfo()}
    console.log();
    return (<div>
    
      {this.salongInfo()}
      </div>);
  };
}

export default Salong;