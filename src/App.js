import React, {useEffect} from 'react';
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
import {bindActionCreators} from "redux";
import {addNewGoods} from "./store/actions";

const App= ({user,addNewGoods,goodsData})=> {

    useEffect(() => {

        if(goodsData.length===0){
            const getLocalStore = localStorage.getItem("GalleryData")

            if( getLocalStore ){
                const GalleryData = JSON.parse(getLocalStore)
                addNewGoods(GalleryData)
                return
            }

            fetch('/defaultGoodsGallery.json',{
                headers:{
                    'Content-Type': 'applications/json'
                }
                }).then(res=>res.json()).then(data=>addNewGoods(data))
        }

    }, [])


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
    goodsData: state.goodsData,
});


const mapDispatchToProps = (dispatch) => ({
    addNewGoods: bindActionCreators(addNewGoods, dispatch)

});

export default connect(mapStateToProps,mapDispatchToProps)(App);

