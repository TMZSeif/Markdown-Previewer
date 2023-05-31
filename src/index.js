import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './app/store';
import { mapDispatchToProps, mapStateToProps } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);

