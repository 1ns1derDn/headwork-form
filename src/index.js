import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ProviderReactRedux } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import ServiceJoke from './serviceJoke/serviceJoke'
import ContextServiceJoke from './components/context/contextServiceJoke'
import App from './components/App'
import store from './store'

const serviceJoke = new ServiceJoke()

ReactDOM.render(
  <ProviderReactRedux store={store}>
    <ContextServiceJoke.Provider value={serviceJoke}>
      <Router>
        <App />
      </Router>
    </ContextServiceJoke.Provider>
  </ProviderReactRedux>,
  document.getElementById('root')
);
