import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../redux/actions/logoutUserAction';
import { store } from '../redux/createStore';
import { clearSearch } from '../redux/actions/clearSearchAction';
import { clearHistory } from '../redux/actions/clearHistoryAction';
import { getTimeStamp } from '../utils/TimeHelper';

class Header extends React.Component {
  constructor() {
    super();

    this.onLogoutClickHandler = this.onLogoutClickHandler.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.loggedIn !== this.props.loggedIn) return true;
    if(nextProps.username !== this.props.username) return true;
    if(nextProps.totalQueriesPerformed !== this.props.totalQueriesPerformed) return true;
    if(nextProps.searchTerm !== this.props.searchTerm) return true;
    return false;
  }

  visibilityButton(term,time){
   
    console.log('{ '+time+' , '+term+' }');
    
  }
  
  renderHeaderContent () {
    if(this.props.loggedIn)
      return (
        <div className="header-credentials">
          <p className="header-credentials-welcomebackmessage">Welcome back,&nbsp; 
            <span id="header-credentials-username">{this.props.username}</span>
          </p>
          <p className="header-credentials-logout" onClick={this.onLogoutClickHandler}>Log out</p>
          <div>
            {this.props.totalQueriesPerformed !== 0 ? <button onClick={()=>{this.visibilityButton(this.props.searchTerm, getTimeStamp())}}>Show</button>: null}
          </div>
         
        </div>
      );
    else
      return (
        <div>
        <p>Please log in to enjoy all features...</p>
        </div>
      );
  }

  render() {
    return (
      <div className="header">
        <h1>Music-search</h1>
        {this.renderHeaderContent()}
      </div>
    );  
  }

  onLogoutClickHandler() {
    store.dispatch(clearSearch());
    store.dispatch(logoutUser());
    store.dispatch(clearHistory());
    console.clear();
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.getIn(['login', 'loggedIn']),
  username: state.getIn(['login', 'username']),
  totalQueriesPerformed: state.getIn(['history', 'totalQueriesPerformed']),
  searchTerm: state.getIn(['search','searchTerm']),
 
});

export default connect(mapStateToProps)(Header);