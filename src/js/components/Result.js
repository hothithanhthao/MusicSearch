import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { removeMusician } from '../redux/actions/removeMusicianAction';
import { store } from '../redux/createStore';


class Result extends React.PureComponent {
  constructor() {
    super();

    this.removeHandler = this.removeHandler.bind(this);
    this.randomEntry = Math.floor(Math.random() * 250);
  }

  render() {
    return (
     
        <div className="musician" style={{ animationDelay: `${this.randomEntry}ms` }}>
        
          <Link className="musician-link"
            to={`/${this.props.musician.name}`}
            target="_blank">

            <h3 className="musician-link-title">
              <span className="musician-link-title-index">
                {this.props.index}.&nbsp;
              </span>
              <span className="musician-link-title-name">
                {this.props.musician.name}
              </span>
            </h3>
            
            <div className="musician-link-info">
              <p className="musician-link-info-listeners">
                <span>
                  {this.props.musician.listeners}
                </span>
                &nbsp;listeners
              </p>
            </div>
            
            <img src={this.props.musician.image[2]['#text']} />
          </Link>

          <button className="musician-remove"
                  onClick={this.removeHandler}>remove</button>
        </div>
      
    );
  }

  removeHandler() {
    store.dispatch(removeMusician(this.props.musician.msId));
  }
}

Result.propTypes = {
  index: PropTypes.number.isRequired,
  musician: PropTypes.object.isRequired
};

export default Result;
