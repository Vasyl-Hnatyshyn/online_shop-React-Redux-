
import { connect } from 'react-redux';
import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Component,user ,...rest}) => (
  <Route {...rest} render={(props) => (
    user ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

const mapStateToProps = (state) => ({
  user: state.user,
 });


export default connect(mapStateToProps)(PrivateRoute);
