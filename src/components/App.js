import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../actions/profileAction';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getProfile());
  }

  render() {
    return (
      <div>
        <p>
          welcome { this.props.profile.name } 
        </p>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
