import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Login from './Login';
import Lookup from './Lookup';
import Results from './Results';

class App extends React.Component {
  constructor() {
    super();
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.loggedIn !== this.props.loggedIn) return true;
    return false;
  }

  render () {
    return (
      <div className="app">

        <Header />

        {this.renderContent()}
        
      </div>
    );
  }

  renderContent() {
    if(this.props.loggedIn) {
      return (
        <div className="mainWindow">
          <Lookup />
          <Results />
        </div>
      );
    }
    else {
      return <Login />; 
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.getIn(['login', 'loggedIn'])
});

export default connect(mapStateToProps)(App);