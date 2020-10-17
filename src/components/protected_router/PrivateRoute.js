
import { connect } from 'react-redux';
import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Component,user ,...rest}) => (
  <Route {...rest} render={(props) => (
    user==='admin' ? <Component {...props} />
      : <Redirect to='/goods_gallery' />
  )} />
)

const mapStateToProps = (state) => ({
  user: state.user,
 });


export default connect(mapStateToProps)(PrivateRoute);
