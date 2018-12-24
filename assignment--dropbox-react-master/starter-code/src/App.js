import React, { Component } from 'react';
import Home from './components/Home';
import Leftbar from './components/Leftbar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <React.Fragment>
          <Leftbar />
          <Home data = {this.props.data}/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
