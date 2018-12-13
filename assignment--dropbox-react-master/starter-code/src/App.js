import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Leftbar from './components/Leftbar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <React.Fragment>
          <Leftbar />
          <Home data = {this.props.data}/>
          <Sidebar />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
