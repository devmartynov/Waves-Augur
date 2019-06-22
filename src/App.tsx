import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './components';

import * as Application from './Application.js';
import './style/index.scss';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
        <Application />
    </Provider>
  )
}

export default App;
