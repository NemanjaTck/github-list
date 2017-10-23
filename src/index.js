import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk),
	autoRehydrate()));

/* Begin periodically persisting the store */
persistStore(store)

/* Depending on the URL we have different routes. User component will
receive a prop 'params' with the GitHub username. */
ReactDOM.render(
	<BrowserRouter>
    <Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
	);
registerServiceWorker();
