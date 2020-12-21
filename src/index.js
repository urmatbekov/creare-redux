import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import createStore from "./components/redux/create-store";
import {Provider} from "./components/redux/react-redux";
import App from "./components/app/app";

const reduce = (state = {number:1}, action) => {

    switch (action.type) {
        case "add":
            return {number:state.number+1}
        case "minus":
            return {number:state.number-1}
        default:
            return state
    }
}

const store = createStore(reduce)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
