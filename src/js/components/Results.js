import React from 'react';
import { connect } from 'react-redux';

import Result from './Result';

class Results extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!this.props.results.equals(nextProps.results)) return true;
    
    return false;
  }

  render() {
    return (
      <div className="results">
        {this.renderResults()}
      </div>
    );
  }

  renderResults() {
    const mutResults = this.props.results.toJS();

    if(mutResults.length) {
      return (
        mutResults.map((result, index) => {
          return <Result key={result.msId} index={(index + 1)} musician={result} />
        })
      );
    }
    else if(this.props.searchTerm) {
      return <p className="results-message">Could not find any results</p>
    }
    else {
      return <p className="results-message">Search for a musician to get started</p>
    }
  }
}

const mapStateToProps = state => ({
  searchTerm: state.getIn(['search', 'searchTerm']),
  results: state.getIn(['search', 'foundMusicians'])
});

export default connect(mapStateToProps)(Results);