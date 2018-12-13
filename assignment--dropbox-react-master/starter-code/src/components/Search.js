import React, {Component} from 'react'
import Files from './Files'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: this.props.data
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

    )
  }
}

export default Search;
