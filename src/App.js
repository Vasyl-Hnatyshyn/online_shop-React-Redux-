import React from 'react';

import './App.css';
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Header from "./components/header/Header";
import GoodsState from "./components/goods_state/GoodsState";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./components/protected_router/PrivateRoute";
import Footer from "./components/footer/Footer";
import GoodsAdd from "./components/goods_add/GoodsAdd";
import GoodsGallery from "./components/goods_gallery/GoodsGallery";

function App() {
  return (


      <ScrollToTop>

        <div className="App">
          <Header />
          <GoodsState />
          <Switch>
              <Route path="/" exact component={GoodsGallery} />
              <PrivateRoute path="/profile" component={GoodsAdd} />
            </Switch>
            <Footer />




    </div>
      </ScrollToTop>
  );
}

export default App;
