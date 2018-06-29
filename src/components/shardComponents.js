import React, { Component } from 'react';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import './App.css';

class Shared extends Component {
  export function header(){
    return (
      <header className="App-header">
          <i class="material-icons gold">arrow_back_ios</i>
          Hår
          <i class="material-icons rotate gold">tune</i>
      </header>
    );
  }
}

export default Shared;
