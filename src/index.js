import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
//import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './components/App';

import indiStore from './stores/indiStore';

const stores = {
  indiStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
