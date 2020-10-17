import React from 'react';
import './App.css';

import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Header from "./components/header/Header";
import GoodsState from "./components/goods_state/GoodsState";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/protected_router/PrivateRoute";

import GoodsAdd from "./components/goods_add/GoodsAdd";
import GoodsGallery from "./components/goods_gallery/GoodsGallery";
import UserRole from "./components/choose_user_role/UserRole";
import { connect } from 'react-redux';

const App= ({user})=> {


  return (
<Router>
        <div className="App">
          <Header />
            {user ? <div className="main-section-wrapper">

            <Switch>
              <Route path="/goods_gallery" exact component={GoodsGallery} />

              <PrivateRoute path="/goods_add" component={GoodsAdd} />
            </Switch>

                <GoodsState />
          </div>:<UserRole/>  }


    </div>
    </Router>

  );
}


const mapStateToProps = (state) => ({
        user: state.user,
});



export default connect(mapStateToProps)(App);

