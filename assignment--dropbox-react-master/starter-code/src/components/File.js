import React, {Component} from 'react'


class File extends Component {
  render() {

    return (

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
      <button className="file__button" onClick={ () => this.downButton() }>
        <i className="fa fa-download"></i>
      </button>
    </div>
  </li>
    )
  }
}

export default File;
