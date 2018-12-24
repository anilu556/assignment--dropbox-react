import React, {Component} from 'react'
import Files from './Files'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.data,
      download: []
    };
  }

  searchByName = (e) => {
    var query = e.target.value.toLowerCase();

    var coincidences = this.props.data.filter(function(file) {
      var nameInLowerCase = file.name.toLowerCase();
      //¿Qué hace includes?
      return nameInLowerCase.includes(query);
    });

    this.setState({
      files: coincidences
    });
  }




  render() {
    console.log(this.state);
    return (
        <div className="file__box">
        <input className="file__search" onChange={this.searchByName } type="search" placeholder="Search..." />
        <Files newFiles={ this.state.files } />
        </div>
          );

        <div className="sidebar">
          { this.state.dowload.map(file => {
            return  (
              <li className="file__item">
            <div className="grid grid--expanded">
              <div className="grid">
                <span className="file__icon">
                  <i className={`fa fa-file-${this.props.type}-o`}></i>
                </span>
                <p className="file__meta">
                  <span className="file__name">{this.props.name}</span> <br />
                  <span>{this.props.date} · {this.props.cat}</span>
                </p>
              </div>
              <button className="file__button">
                <i className="fa fa-download"></i>
              </button>
            </div>
          </li>
            )
            })
          }
        </div>
  }
}

export default Search;
