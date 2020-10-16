import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConnectedRouter history={history}>
                  <App />
          </ConnectedRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


