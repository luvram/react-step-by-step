import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Home from './Home.jsx';
import About from './About.jsx';

import { calculate } from './reducer.js';
import saga from './saga.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  calculate,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);

