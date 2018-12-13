import React, {Component} from 'react'
import Files from './Files';

class Archives extends Component {
  render() {

    return (

        <ul className="file__container">
        <h4> Recent </h4>
          {this.props.data.map(function(files) {
            return  <Files
              name ={ files.name }
              date ={files.added_at}
              cat ={files.category}
              type ={files.type}
        />
        }) }
        </ul>

    )
  }
}

export default Archives;
