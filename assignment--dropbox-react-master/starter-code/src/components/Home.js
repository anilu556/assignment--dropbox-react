import React, {Component} from 'react'
import Search from './Search'

class Home extends Component {
  render() {

    return (

      <div className="file__container">
          <Search data = {this.props.data} />
      </div>

    )
  }
}

export default Home;
