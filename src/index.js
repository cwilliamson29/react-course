import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import { FavoritescontextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritescontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritescontextProvider>,

  document.getElementById('root')
);
