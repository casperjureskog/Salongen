import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route} from "react-router-dom";

import List from './components/List';
import Salong from './components/Salong';




ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={List} />
      <Route path='/salong/:id' component={Salong} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
