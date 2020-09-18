import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; // for redux
import { Provider } from 'react-redux'; // for redux
import rootReducer from './reducers/index';

const store = createStore(rootReducer); // store is a redux store that knows how to handle the actions we've defined

store.subscribe(() => 
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}> {/*pass store as a prop to provider*/}
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
