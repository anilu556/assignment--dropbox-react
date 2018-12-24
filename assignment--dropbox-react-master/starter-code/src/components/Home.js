import React, {Component} from 'react'
import moment from 'moment'

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      files: this.props.data,
      download: [],
      total: 0
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

  downloadsBtn(fileId){
    var fileById = this.props.data.filter((file) => {
      return file.id === fileId;
    });

    var preventAddingTwice = this.state.download.every((download) => {
      return download !== fileById[0].name;
    });

    if(preventAddingTwice){
      this.setState({
        download: [...this.state.download, fileById[0].name, fileById[0].size],
        total: this.state.total + parseInt(fileById[0].size)
      });
    }
  }

  render(){
    return(
      <div className="container__archives">
        <div className="container__files">
          <input className="file__search" onChange= { this.searchByName } type="search" placeholder="Search..."></input>
          <div>Recent</div>
          <ul className="file__box">
            {
            this.state.files.map((file) => {
              return (
                <li className="file__item" key= { file.id }>
                  <div className="grid grid--expanded">
                    <div className="grid">
                      <span className="file__icon">
                        <i className={`fa fa-file-${file.type}-o`}></i>
                      </span>
                      <p className="file__meta">
                        <span className="file__name"> { file.name } </span> <br />
                        <span> { moment(`${file.added_at}`, "X").fromNow() } . { file.category } </span>
                      </p>
                    </div>
                    <button className="file__button" onClick={ () => this.downloadsBtn(file.id) }>
                      <i className="fa fa-download"></i>
                    </button>
                  </div>
                </li>
              );
            })
            }
          </ul>
        </div>
        <div className="container__downloads">
          <h3>Compress</h3>
          <h4>TOTAL: { this.state.total } KB</h4>
          <ul>
          {
            this.state.download.map((download, index) => {
              return <li key={ index }>{ download }</li>
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
