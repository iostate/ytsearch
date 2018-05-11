import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import SearchBar from './components/search_bar';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
  return <div>
  <h1>Hello World</h1>
  <SearchBar />  
  </div>;
}
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
, document.querySelector('.container'));
