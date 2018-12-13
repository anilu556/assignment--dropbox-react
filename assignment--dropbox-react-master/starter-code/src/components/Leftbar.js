import React, {Component} from 'react'
// import EduTitle component

class Leftbar extends Component {
  render() {

    return (

        <div className="leftbar">
          <i className="fab fa-dropbox"></i>
          <ul className="menu">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Setting</a></li>
            <li><a href="#">Log out</a></li>
          </ul>
        </div>

    )
  }
}

export default Leftbar;
