// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App.js';
import { store } from './app/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const render = () => {
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />
  )
};
render();

// Subscribe render to the store.
store.subscribe(render);
