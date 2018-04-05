import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {combineReducers, createStore } from 'redux';

function productsReducer(state = [], action){
	//console.log(action);
    /*
	if(action.type === 'changeState') {
		return action.payload.newState;
	}*/
	return 'state';
}

function userReducer(state = '', action){
	return 'state';
}

const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer
});

const store = createStore(allReducers);

/*
const store = createStore(reducer);

console.log(store.getState())

const action = {
	type: 'changeState',
	payload: {
		newState: 'New state'
	}
};

store.dispatch(action);
*/
console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
