import React from 'react';
import { render } from 'react-dom';
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