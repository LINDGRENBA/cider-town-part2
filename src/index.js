import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; // for redux
import rootReducer from './reducers/index';
import { Provider } from 'react-redux'; // for redux

const store = createStore(rootReducer); // store is a redux store that knows how to handle the actions we've defined

store.subscribe(() => 
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
