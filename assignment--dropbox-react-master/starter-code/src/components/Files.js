import React, {Component} from 'react'
import File from './File'


class Files extends Component {
  render() {

    return (

      <section>
      <h4> Recent </h4>
      <ul>
        {this.props.newFiles.map(function(file){
          return <File
          type = {file.type}
          name = {file.name}
          date = {file.added_at}
          cat = {file.category}/>
        })
      }
      </ul>
      </section>
    )
  }
}

export default Files;
