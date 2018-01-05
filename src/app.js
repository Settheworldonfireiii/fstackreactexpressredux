import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {syncReduxAndRouter} from 'redux-simple-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import  { createStore }  from 'redux';
import article from './reducers/article';
import PublishingApp from './layouts/PublishingApp';




debugger;
const store1 = createStore(article);
debugger;
console.log("weiss");
debugger;
console.log("ayahuasca");
render(<Provider store={store1}>
<PublishingApp />
</Provider>,
document.getElementById('publishingAppRoot')
);