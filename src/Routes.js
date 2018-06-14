import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { Login, Account, Auth } from './containers';
import store from './store';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Auth path="/">
        <Account path="/" />
      </Auth>
      <Login path="/login" />
    </Router>
  </Provider>
);

export default Routes;
