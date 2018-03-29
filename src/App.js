import React, { Component } from 'react';
//import {observer,Provider,inject} from  'mobx-react';
import Sidebar from './components/Sidebar';
class App extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
          <Sidebar/>
          <div id="page-content-wrapper">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
