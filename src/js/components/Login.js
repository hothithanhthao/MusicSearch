import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../redux/actions/loginUserAction';
import { store } from '../redux/createStore';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      localError: null
    };

    this.onLoginClickHandler = this.onLoginClickHandler.bind(this);
    this.onChangeUsernameHandler = this.onChangeUsernameHandler.bind(this);
    this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if(nextState.username !== this.state.username) return true;
    if(nextState.password !== this.state.password) return true;
    if(nextState.localError !== this.state.localError) return true;

    if(nextProps.loginError !== this.props.loginError) return true;

    return false;
  }

  render () {
    return (
      <div className="login">
        <div className="login-component">
          <p className="login-component-instruction">Please fill out your username and password</p>
            
          <div className="login-component-controls">
            <div className="login-component-controls-control">
              <span className="login-component-controls-control-description">username:</span>
              <input type="text"
                     value={this.state.username} 
                     onChange={this.onChangeUsernameHandler} 
                     onKeyDown={this.onKeyDownHandler} />
            </div>

            <div className="login-component-controls-control">
              <span className="login-component-controls-control-description">password:</span>
              <input type="password" 
                     value={this.state.password} 
                     onChange={this.onChangePasswordHandler}  
                     onKeyDown={this.onKeyDownHandler} />
            </div>
            
            { (this.props.loginError && !this.state.localError) &&
              <span className="login-component-controls-description-error">{this.props.loginError}</span>
            }
            { this.state.localError &&
              <span className="login-component-controls-description-error">{this.state.localError}</span>
            }
            
            <button onClick={this.onLoginClickHandler}>Log in</button>
          </div>
        </div>
      </div>
    );
  }

  onLoginClickHandler() {
    if(!this.state.username || !this.state.password) {
      this.setState({
        localError: 'Supply a valid username and password'
      })
    } 
    else {
      this.setState({
        localError: null
      }, () => store.dispatch(loginUser(this.state.username, this.state.password)));
    }
  }

  onChangeUsernameHandler(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePasswordHandler(e) {
    this.setState({
      password: e.target.value
    });
  }

  onKeyDownHandler(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
      this.onLoginClickHandler();
    }
  }
}

const mapStateToProps = state => ({
  loginError: state.getIn(['login', 'loginError'])
});

export default connect(mapStateToProps)(Login);