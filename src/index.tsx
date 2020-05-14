import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

import { history } from './init/rootReducer';
import store from './init/store';
import App from './components/app/App';

const renderApp = () => ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.querySelector(`#root`)
);

if(module.hot && process.env.NODE_ENV !== `production`) {
    module.hot.accept(`./components/app/App.tsx`, renderApp);
}

renderApp();
